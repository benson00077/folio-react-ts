export const switchLan = (lan: "EN" | "ZH") => {
  switch (lan) {
    case "EN":
      return {
        type: "ZH",
      };
    case "ZH":
      return {
        type: "EN",
      };
  }
};