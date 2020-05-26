口罩地圖紀錄過程

使用的ＡＰＩ:
https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1k5dAvUSR7XCoG_H_RQx9pzYyJEMqG9AN06e4HNJIASIv-_gwTseX4sSI

參考設計考：
https://xd.adobe.com/view/a1884f2e-dc8d-4c38-6cce-a684e80a73ef-d7b9/screen/ebd908a9-996c-438c-a76a-957f485c054c/1-1


# 5/20號 目前進度
1.                           done
清單顯示內容更改
顯示附近地點的藥局
不再顯示全部資料。

2.
filter.js
篩選select option
距離                         done
營業時間                      done
需求口罩數量                  done


3.
距離計算                      done

-------------------------------------------------

營業中 / 非營業中判斷           done


引入moment.js處理時間
營業時間顯示時段     
先抓今日時間找出星期幾
再來定個時段
08:00~21:30 上午下午晚上
08:00~12:00 上午
14:00~17:00 下午
18:00~21:30 晚上
休診
看診

-------------------------
口罩數量判斷三種狀態             done
成人口罩有
兒童口罩有
售完狀態

4.
地圖優化



