// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import { Image } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/documents/documentsActions";
import { useImagesUIContext } from "./ImagesUIContext";

export function ImagesTable() {
  const imagesUIContext = useImagesUIContext();
  const imagesUIProps = useMemo(() => {
    return {
      ids: imagesUIContext.ids,
      setIds: imagesUIContext.setIds,
      stockId: imagesUIContext.stockId,
      openAddImagesDialog: imagesUIContext.openAddImagesDialog,
      openDeleteImageDialog: imagesUIContext.openDeleteImageDialog,
      openDeleteImagesDialog: imagesUIContext.openDeletesImageDialog,
    };
  }, [imagesUIContext]);

  // Getting curret state of stocks list from store (Redux)
  const { stockImages } = useSelector(
    (state) => ({ stockImages: state.documents.stockImages }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    imagesUIProps.setIds([]);
    dispatch(actions.fetchImages(imagesUIProps.stockId));
  }, [dispatch, imagesUIProps.stockId]);
  const removeImage = (e) => {
    const id = e.target.dataset.id || e.target.parentElement.dataset.id;
    imagesUIProps.openDeleteImageDialog(id)
  };
  return (
    <div className="thumbnails">

      {stockImages
        .map((image, index) => {
          const imagePath = process.env.REACT_APP_API_URL + image.path;
          return (

            <div class="thumbnail">
              <Image id={"image-" + image.id} src={imagePath} rounded />
              <a onClick={removeImage} data-id={image.id} className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow">
                <i className="ki ki-bold-close icon-xs text-muted"></i>
              </a>
            </div>


          );
        })}
      <div class="thumbnail">
        <a id="addThumbnail" onClick={imagesUIProps.openAddImagesDialog} class="btn btn-icon btn-square btn-white">
          <div className="d-flew justify-content-center" style={{flexDirection:"column"}}>
          <i class="fas fa-car " style={{fontSize:"3rem !important"}}></i> <br/>Resim Ekle
          </div>
     </a>
          </div>
    </div>
  );
}
