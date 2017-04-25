
// var thisType = IconTypeEnum.languages;
// var iconClass = IconTypeEnum.properties[thisType].iconClass; 
//     iconClass is 'footer_menu_icon_languages'
var IconTypeEnum = {
  languages: 1,
  lastEdited: 2,
  pageIssues: 3,
  disambiguation: 4,
  coordinate: 5,
  properties: {
    1: {iconClass: "footer_menu_icon_languages"},
    2: {iconClass: "footer_menu_icon_last_edited"},
    3: {iconClass: "footer_menu_icon_page_issues"},
    4: {iconClass: "footer_menu_icon_disambiguation"},
    5: {iconClass: "footer_menu_icon_coordinate"}
  }
};

class WMFMenuItem {
    constructor(title, subtitle, iconType, clickHandler) {
        this.title = title;
        this.subtitle = subtitle;
        this.iconType = iconType;
        this.clickHandler = clickHandler;
    }
}

class WMFMenuItemFragment {
    constructor(wmfMenuItem) {
        var itemContainer = document.createElement('div');
        itemContainer.className = 'footer_menu_item_container';

        var containerAnchor = document.createElement('a');
        containerAnchor.addEventListener('click', function(){
          wmfMenuItem.clickHandler();
        }, false);
                
        itemContainer.appendChild(containerAnchor);

        if(wmfMenuItem.title){
            var title = document.createElement('div');
            title.className = 'footer_menu_item_title';
            title.innerText = wmfMenuItem.title;
            containerAnchor.appendChild(title);
        }

        if(wmfMenuItem.subtitle){
            var subtitle = document.createElement('div');
            subtitle.className = 'footer_menu_item_subtitle';
            subtitle.innerText = wmfMenuItem.subtitle;
            containerAnchor.appendChild(subtitle);
        }

        if(wmfMenuItem.iconType){
            var iconClass = IconTypeEnum.properties[wmfMenuItem.iconType].iconClass; 
            itemContainer.classList.add(iconClass);
        }

        return document.createDocumentFragment().appendChild(itemContainer);
    }
}

function addItem(containerID, title, subtitle, iconType, clickHandler) {
  const itemModel = new WMFMenuItem(title, subtitle, iconType, clickHandler);
  const itemFragment = new WMFMenuItemFragment(itemModel);
  document.getElementById(containerID).appendChild(itemFragment);
}

function setHeading(string) {
  document.getElementById('footer_menu_title').innerText = string;
}

exports.IconTypeEnum = IconTypeEnum;
exports.setHeading = setHeading;
exports.addItem = addItem;
