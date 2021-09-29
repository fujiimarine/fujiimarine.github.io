function sound(no){
    // 対象となるID名
    var id = 'sound' + no ; 
    // [currentTime]を認識した場合のみ、処理をする
    if( typeof( document.getElementById( id ).currentTime ) != 'undefined' ){
        document.getElementById( id ).currentTime = 0;
    }
    // [ID:sound-file]の音声ファイルを再生[play()]する
    document.getElementById( id ).play() ;
}