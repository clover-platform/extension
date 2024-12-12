import "~style.css"
import { TabLauncher } from "@clover-platform/launcher"

document.title = chrome.i18n.getMessage("newTabTitle");

const NewTab = () => {
  return <TabLauncher
    defaultConfig={{
      background: {
        type: "image",
        image: "http://localhost:4002/assets/wallpaper/default.jpg",
      }
    }}
  />
}

export default NewTab;