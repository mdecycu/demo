var tipuesearch = {"pages": [{'title': 'About', 'text': 'acp for Windows and Ubuntu \n w5 除了 Replit 將利用自行維護的虛擬伺服器執行各學員的動態網站, 目的除了維護個人的內容管理系統外, 也將用於 \n 網際上的積電資整合系統場景: 例如, 控制  http://c1.cycu.org:23020  中作動的機構系統. \n 取代  https://wcms.repl.co  (免費資源已經耗盡, 所以無法正常啟動) 的 server 為  https://wcms.cycu.org:5443 \n 修正原先 request.url 無法正確在非 443 port 情況下跳回 https 協定進入編輯的 bug. \n \n correct_url 函式如下: \n def correct_url():\n\n    """get the correct url for http and https edit mode\n        to replace original request.url under set_admin_css, set_css and set_footer\n    """\n    url = request.url\n    if request.is_secure:\n        return url\n    else:\n        url = url.replace("http://", "https://", 1)\n        return url \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': 'Under Windows: \n \n 所謂 Secure Shell 就是利用 公開金鑰加密 , 在傳輸指令的過程對內容加密, 以保障資訊不被第三方取得, 當使用者在近端執行個人倉儲的動態網站後進行編輯改版, 並將動態網站轉為靜態網站, 希望將新的靜態網站內容送到 Github Pages\xa0 中的過程, 可以透過 SSH 協定建立一對數位鑰匙, 其公開鑰匙登錄到 Github SSH 設定區, 而私人鑰匙則放在近端電腦或隨身碟中, 當推送資料時只有與帳號下公鑰配對的私鑰擁有者, 有權限更改倉儲內容, 以下為在 Windows 操作系統採 SSH 對 Github 倉儲進行改版的設定過程. \xa0 \n 確定\xa0 start.bat 啟動時已經設定 GIT_SSH 變數, 且與 plink.exe 連結, 表示設定之後的 Git\xa0 指令, 若採 SSH 協定與 Github 溝通, 近端的金鑰加密格式採用 Putty 所提供的 ppk 格式. \xa0 \n 在 Windows 操作系統, 可以 利用 Putty 的 puttygen.exe 產生 public key (OpenSSH 格式, 可登錄到 Github) 與 private key (ppk 格式), 且將 public key 放入 Github 帳號下 settings -> SSH and GPG 設定區. \xa0 \n 將 private key 存入隨身碟或 C 槽後,\xa0 送到自己的 onedrive 區, 當設定\xa0 putty.exe session 時必須在 session 使用授權區給定私鑰儲存位置. \xa0 \n 利用 putty.exe 在電腦上設定一個 session 名稱, 且此一 session 名稱, 代表三項資訊: a. 以 SSH\xa0 協定連結到 github.com (default port 為 22),\xa0 b. 決定需不需要使用 proxy (github.com 目前僅支援 IPv4), c. ppk 格式的 private key 位置. \xa0 \n \n \xa0 \n 利用 Putty session 以 SSH 協定 git clone 遠端倉儲, 假如前述設定都正確的話, 就可以在近端改版後, 將版本推向 Github. \xa0 \n \xa0 \n SSH\xa0 從 Github git clone\xa0 語法: \xa0 \n \xa0 \n git clone\xa0 --recurse-submodules\xa0  git@putty_session_name:github_account/repository_name.git \xa0 \n \xa0 \n 請特別注意\xa0 putty_session_name 與\xa0 github_account 中間為 : \n \n Under Ubuntu \n \n (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh  cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n 請到 excel 檔案  查詢  stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \xa0 \n (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp  帳號@stud.cycu.org \xa0\xa0  輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0  config  設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy  http://p42.cycu.org:3128   設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記. \xa0 \n 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0  git@github.com:mdecad2022/site-個人github帳號.git \xa0\xa0 取下個人倉儲. \xa0 \n 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodue update --init\xa0 --recursive\xa0 即可取下子模組內容. \xa0 \n 接著下載  server.py , 在 Windows 編輯  server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站),  https://stud.cycu.org:8xxxx \xa0\xa0 看到個人的動態網站. \xa0 \n 動態網站改版後, 轉為靜態, 必須透過 source  acp  以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性). \xa0 \n 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name,  git config\xa0 --global user.email,  git config\xa0 --global http.proxy \xa0 \n 上述採用指令模式對\xa0 server sftp 也可以利用\xa0  Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n \n config under .ssh 目錄: \n Host 就是 .ssh/config 設定的對應 session 名稱, 此處若 Host 設為 demo, 則 SSH 對應的 .git/config 中的 URL 就必須使用  git@demo:mdecad2022/site-scrum-1.git,  demo 就是 Host, Port 則是隨後的 %p, 也就是 SSH 協定的內建 port 22, %h 則是 Hostname, 也就是 github.com \n Host demo\nUser git\nHostname github.com\nProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p \n \n 2a 在一台遠端 server, 執行個人倉儲的動態網頁. \xa0 \n \xa0 \n \n Login to \xa0 https://mail.nfu.edu.tw \xa0 -\xa0 查看登入 stud.cycu.org 伺服器的帳號密碼, 帳號為 cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到 excel 檔案 \xa0 查詢 \xa0 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 \xa0 \n 修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. \xa0 \n 重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0 \xa0 cad+學號@stud.cycu.org , 表示要使用 secure shell 遠端登入到 stud.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key \xa0 \n 設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. \xa0 \n 利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. \xa0 \n 對\xa0 server sftp 也可以利用\xa0 \xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n 接下來要下載\xa0 \xa0 config \xa0 設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0 \xa0以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 \n 利用\xa0 git clone --recurse-submodules\xa0 \xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 demo \xa0 \n 接著下載 \xa0 server.py , 在 Windows 編輯 \xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 登入\xa0 Ubuntu 後, 會使用的指令: pwd 代表 print working directory, clear -\xa0 清除螢幕, cd - 更換目錄, ls -l 列出目錄詳細內容, chmod u+x \xa0 acp \xa0 表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串. \xa0 \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'cmsimde', 'text': '能不能將 Blog and Reveal.js 也同動態網站, 直接在線上進行編輯改版? \n 能不能將 SSH 設定完成後, 直接在線上 acp? 可以透過 user.py 以 blueprint 架構延伸. \n https://stud.cycu.org:8000/user/threegear \n', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'vscode', 'text': 'https://code.visualstudio.com/docs/editor/vscode-web#_opening-a-project \n', 'tags': '', 'url': 'vscode.html'}, {'title': 'NX', 'text': 'NX tutorial \n Onshape:  https://cadlab.mde.tw/post/onshape-featurescript-spur-gear-ling-jian.html \n', 'tags': '', 'url': 'NX.html'}, {'title': 'CoppeliaSim', 'text': 'Opencv 與 Scenes \n http://mod.cycu.org  has coppeliaSim on Ubuntu desktop \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'Fusion 360', 'text': '除了  https://onshape.com \xa0 還有 Fusion 360 也提供免費教育版: \n https://www.autodesk.com/education/edu-software/overview \n', 'tags': '', 'url': 'Fusion 360.html'}, {'title': 'Files', 'text': '.ssh/config \n Host github.com\nUser git\nHostname github.com\nProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p\n \n acp \n #! /bin/bash\ngit add .\ngit commit -m "$1"\ngit push\n \n 進入倉儲根目錄後, 以 vi acp 建立, 完成存檔後, 必須再利用 chmod u+x acp, 將 acp 檔案設為 user 可以 execuate. \n 運用 acp 執行 git add, git commit 與 git push 之前, 必須先處理好 SSH 設定, 也就是利用 ssh-keygen 在 .ssh 目錄下分別建立 id_rsa private key, 以及 id_rsa.pub public key, 而 id_rsa.pub 可以利用 sftp 從 Ubuntu 取至 Windows 環境後, 送進 Github SSH 設定處, 而 .ssh 目錄下還需要建立一個 config 設定檔案, 以便指定 ssh 推送資料時使用 Proxy. \n', 'tags': '', 'url': 'Files.html'}, {'title': 'Linux 指令', 'text': 'Linux 指令與 Mac BSD 操作系統的指令相同. \n 常用 Linux 指令: \n 必須熟悉 vi - 以便能在純 text console 模式下進行檔案編輯 \n vi acp \n 表示要利用 vi 編輯 acp 檔案 \n 進入後為指令模式, 可以按下 i 進入 insert 模式, 然後以 i, j, k, l 鍵移動滑鼠游標位置 \n 按下 esc 可以跳出編輯模式, 重新進入指令模式 \n 在指令模式下, 以 a 按鍵 append 字元, 以 o 在下一行插入字元, 以 O 在上一行插入字元. \n 完成編輯後, 必須進入指令模式, 然後按下 :w, 表示要 write file, 若使用 :q! 表示退出且不存檔, 若使用 :wq, 則存檔案後退出. \n cd cmsimde \n cd .. \n ls -l \n pwd \n mkdir \n chmod u+x acp \n', 'tags': '', 'url': 'Linux 指令.html'}, {'title': 'limitation', 'text': 'Ubuntu itself does not limit connections. \n', 'tags': '', 'url': 'limitation.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};