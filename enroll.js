/* 
這一行是要選課程欄位 那一串像亂碼的東西是課程編號，對著課程欄位點下右鍵，選擇"檢查"，
會看到這樣的代碼，表示你的課程代號，貼到下面的程式裡換掉
<option value="V5<6>KLM;<=>@B=BD@EKCI" >
並把下面的程式複製貼到瀏覽器的console送出即可，說明請參照註解
*/
// 已預約 8/25 計組為範例
document.getElementById("class_selector").value = "V5<6>KLM;<=>@B=BD@EKCI";
//                                                 ^^^^^ 把你要的課程代碼貼到這
getBranch();
document.getElementById("date_selector").value = "2019-08-25";
//                                                 ^^^^^ 把你要的預約時間貼到這
getSessionAndTime();
// 依樣畫葫蘆怎麼查課程代碼就怎麼查教室代碼(景美TE ; 台北TT)，這裡以台北為例
document.getElementById("branch_selector").value = "TT";
//                                                  ^^ 把你要的教室代碼貼到這
getSessionAndTime();
// 選時段，[0]表示第一場次，[1]表示第二場次，依此類推
document.getElementsByName("session_time")[0].checked = true;
document.getElementsByName("session_time")[1].checked = true;
// 把表單送出，確認預約
book();
