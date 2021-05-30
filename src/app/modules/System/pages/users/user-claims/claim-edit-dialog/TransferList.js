import React,{useMemo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { useClaimsUIContext } from "../ClaimsUIContext";
//#region HELPERS

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 400,
    height: 230,
    backgroundColor: theme.palette.background.default,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  if(!Array.isArray(b))b=[b]
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  if(!Array.isArray(b))b=[b]
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  if(!Array.isArray(b))b=[b]
  return [...a, ...not(b, a)];
}
function removeArray(list,removeList){
  var filtered = list.filter(
    function(e) {
      return this.map(q=>q.id).indexOf(e.id) < 0;
    },
   removeList
)
return filtered
}
//#endregion
export function TransferList({allClaims,ownClaims}) {
  const claimsUIContext = useClaimsUIContext();
  const claimsUIProps = useMemo(() => {
    return {
      setRight:claimsUIContext.setOwnClaims
    };
  }, [claimsUIContext]);
  // claimsUIProps.setRight(ownClaims);
  const professional=ownClaims.filter(q=>q.professionId!==null)
 // const personal=ownClaims.filter(q=>q.professionId===null)


  allClaims = removeArray(allClaims,ownClaims)
  
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(allClaims);//seçilebilir
  const [right, setRight] = React.useState(ownClaims);//Mevcut
  const leftChecked = intersection(checked, left.map(q=>q.id));
  const rightChecked = intersection(checked, right.map(q=>q.id));

  const handleToggle = (item) => () => {
     
      if(professional.map(q=>q.id).includes(item.id))   alert("Mesleki yetkilerde değişiklik yapamazsınız...")
      else{
         const currentIndex = checked.indexOf(item.id);
         const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(item.id);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
      }

  };

  const numberOfChecked = (items) => intersection(checked, items.map(q=>q.id)).length;

  const handleToggleAll = (items) => () => {
    items = items.filter(item => item.professionId==null)
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items.map(q=>q.id)));
    } else {
      setChecked(union(checked, items.map(q=>q.id)));
    }

  };

  const handleCheckedRight = () => {
    let leftItems=[]
    leftChecked.forEach(element => {
      leftItems.push(left.find(q=>q.id==element))
    });
   
    setRight(right.concat(leftItems));
    setLeft(not(left, leftItems));
    setChecked(not(checked, leftChecked));
    claimsUIProps.setRight(right.concat(leftItems))
  };

  const handleCheckedLeft = () => {
    let rightItems=[]
    rightChecked.forEach(element => {
      rightItems.push(right.find(q=>q.id==element))
    });
    setLeft(left.concat(rightItems));
    setRight(not(right, rightItems));
    setChecked(not(checked, rightChecked));
    claimsUIProps.setRight(not(right, rightItems))
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'Tüm Yetkiler Seçildi' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} seçili yetki`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((item) => {
          const labelId = `transfer-list-all-item-${item.id}-label`;
          return (
            <ListItem key={item.id} role="listitem" button onClick={handleToggle(item)}>
              <ListItemIcon>
                <Checkbox
                  disabled={professional.map(q=>q.id).indexOf(item.id)>-1}
                  checked={checked.indexOf(item.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList('Eklenebilir Yetkiler', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="Seçilileri sağa taşı"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="Seçilileri sola taşı"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Mevcut Yetkiler', right)}</Grid>
    </Grid>
  );
}
