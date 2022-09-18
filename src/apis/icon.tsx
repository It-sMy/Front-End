import { stackDetail } from "../types/data";

export const getIconURL = (name: string): stackDetail["stackURL"] => {
  //visualstudiocode
  let tmpName = name.toLowerCase().split(" ");

  let tmpNameUpper = tmpName.map((val) => {
    let splited = val.split("");
    splited.splice(0, 1, val[0].toUpperCase());
    //Visual%20Studio%20Code
    return splited.join("");
  });

  var iconImportNameList = name.toLowerCase().split("");
  iconImportNameList.splice(0, 1, iconImportNameList[0].toUpperCase());

  var iconURLName = tmpNameUpper.join("%20");
  var iconImportName:any = iconImportNameList.join("").replaceAll(" ", "");

  //URL 서칭용과 Import용
  console.log(iconURLName, iconImportName);

  var url = `https://img.shields.io/badge/-EBF1F3.svg?&style=for-the-badge&logo=${iconURLName}&logoColor=333`;
  console.log(url)
  return url;
};
