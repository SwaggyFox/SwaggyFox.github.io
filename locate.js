// JavaScript Document
// 地图API
var map = new BMap.Map("location");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,18);
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})
