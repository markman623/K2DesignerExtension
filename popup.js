document.getElementById('RunSMO').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function(){
            let urlParams = new URLSearchParams(window.location.hash);
            let mainContent = document.querySelector('.lyt-explorer-maincontent');
            
            let newDiv = document.createElement('div');
            let newLink = document.createElement('a');
            newLink.textContent = 'close';
            newLink.onclick = function() {
              this.parentNode.remove();
            };
            
            let newIframe = document.createElement('iframe');
            newIframe.src = window.location.origin + '/Management/Runtime/Form.aspx?_ID=2ae83f85-6336-49f1-a9e5-fe78b220f6c4&smartobjectguid=' + urlParams.get('guid');
            newIframe.height = '400px';
            newIframe.width = '100%';
            
            newDiv.appendChild(newLink);
            newDiv.appendChild(document.createElement('br'));
            newDiv.appendChild(newIframe);
            
            mainContent.parentNode.insertBefore(newDiv, mainContent.nextSibling);
            
        }
    });
    });
  });
  
  document.getElementById('HideLeftPanel').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: function(){

                let urlParams = new URLSearchParams(window.location.hash);

                if( urlParams.get('datatype') == "form"){

                    lPane = document.getElementById('LayoutNavigationPane');
                    cPane = document.getElementById('FormDesignerCenterPane');

                    if (lPane.style.display == 'none'){
                        lPane.style.display = '';
                        cPane.style.left = '150px';
                    }
                    else{
                        lPane.style.display = 'none';
                        cPane.style.left = '3px';
    
                    }



                }

                if( urlParams.get('datatype') == "view"){

                    vdPane = document.getElementById('vdToolboxPane');
                    edPane = document.getElementById('editorCanvasPane');

                    if (vdPane.style.display == 'none'){
                        vdPane.style.display = '';
                        edPane.style.left = '150px';
                    }
                    else{
                        vdPane.style.display = 'none';
                        edPane.style.left = '3px';
                    }
                }


            }
        });
    });
  });
  
  document.getElementById('HideRightPanel').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function(){

            let urlParams = new URLSearchParams(window.location.hash);

            if( urlParams.get('datatype') == "form"){

                lPane = document.getElementById('FormDesignerLayoutPropertiesPane');
                cPane = document.getElementById('FormDesignerCenterPane');

                if (lPane.style.display == 'none'){
                    lPane.style.display = '';
                    cPane.style.right = '150px';
                }
                else{
                    lPane.style.display = 'none';
                    cPane.style.right = '3px';

                }



            }

            if( urlParams.get('datatype') == "view"){

                vdPane = document.getElementById('vdeditorToolboxPane');
                edPane = document.getElementById('editorCanvasPane');

                if (vdPane.style.display == 'none'){
                    vdPane.style.display = '';
                    edPane.style.right = '150px';
                }
                else{
                    vdPane.style.display = 'none';
                    edPane.style.right = '3px';
                }
            }


        }
    });
    });
  });