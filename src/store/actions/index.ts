export const switchLan= (lan: "EN" | "ZH") => {
  console.log(lan)
  switch(lan) {
    case "EN":
      return {
        type: "ZH"
      }
    case "ZH":
      return {
        type: "EN"
      }
  }
}