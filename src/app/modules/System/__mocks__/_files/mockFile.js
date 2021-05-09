import fileTableMock from "./fileTableMock";
import MockUtils from "../mock.utils";

export default function mockFile(mock) {
  mock.onPost("files/upload").reply(({ data }) => {


    const { file } = JSON.parse(data);
    const {
      url = "",
      name = "",
      guid = "",
      relationGuid = "",
      relationTable = ""
    } = file;

    const id = generateFileId();
    const newFile = {
      id,
      url,
      name,
      guid,
      relationGuid,
      relationTable
    };
    fileTableMock.push(newFile);
    return [200, { file: newFile }];
  });

  mock.onPost("files/find").reply(config => {
    var resp={
      entities:fileTableMock,
      totalCount:fileTableMock.length
    }
    return [200, resp];
  });
}

function generateFileId() {
  const ids = fileTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}