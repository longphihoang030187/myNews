
// Token để có thể gọi API. Chỉ được Request 100 mỗi ngày、Có thể sử dụng 2 số token ở dưới
// 9cc8a142a2251f508d274a8ecc453a2a
// 9d303062fe2ac213bc5ac001a84fb592

// Thêm biểu tượng loading trong quá trình tải dữ liệu từ API về.
  $(window).on('load', function(event) {
    $('.loader').delay(1000).fadeOut('fast');
    });

// Tải và hiển thị nội dung top-headline   
$(document).ready(function(){
fetch('https://gnews.io/api/v4/top-headlines?token=9cc8a142a2251f508d274a8ecc453a2a')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);

        i=0;
        // console.log(data);
        $.each(data.articles, function(){
        console.log(data.articles);
        i++;

    // for(let i=0; i < data.articles.length; i++){
        var image = data.articles[i].image;
        var title = data.articles[i].title;
        var description = data.articles[i].description;
        var url =data.articles[i].url;
        var date =data.articles[i].publishedAt;
        var outputNews =`<div class="main_news">
                        <a href="${url}" class="image_news" target='_blank' ><img src="${image}" ></a>
                        <div class ="Nav-news">
                            <a  class= 'title' href="${url}" target='_blank'> ${title}</a> 
                            <p class= "date">${date}</p>
                            <p class= "description">${description}</p>
                        </div>
                    </div>`    
        $("#news").append(outputNews);
        })


});
    
});

// Đóng mở hộp thoại tìm kiếm
$(document).ready(function(){
$("#btSearch").click(function(){
    // $(".modal").addClass("open");
    $(".modal").show();


 });
});

// Đóng hộp thoại tìm kiếm khi user bấm nút tắt
$(document).ready(function(){
    $(".btn_close").click(function(){
    // $(".modal").removeClass("open");
    $(".modal").hide();
});
});

// khi user click vao ngoai o modal thi xoa 
$(window).on('click', function (e) {
    if ($(e.target).is(".modal")) {
      $(".modal").hide();
    }
  });


// Khi user nhập vào tin tức tìm kiếm thì hiển thị thông tin tìm kiếm mới theo từ khoá.
$(document).ready(function(){
$(".btnSearch").click(function(){
// $(".modal").removeClass("open");
$(".modal").hide();//an modal
$("#news").empty();//Xoá hết thông tin cũ
$("#animated_gif").show();// cho show icon loading

let keyword =$("#inputbox").val(); //Lấy giá nhập ở ô inputbox

var keyDate = new Date();
console.log(keyDate)
//Thêm các chức năng lọcthời gian tìm kiếm
var url = `https://gnews.io/api/v4/search?q="${keyword}"&from="${keyDate}"&token=9cc8a142a2251f508d274a8ecc453a2a`;
fetch(url)
    .then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);

//Tắt icon hiệu ứng
    $("#animated_gif").hide();
    for(let i=0; i < data.articles.length; i++){
        var image = data.articles[i].image;
        var title = data.articles[i].title;
        var description = data.articles[i].description;
        var url =data.articles[i].url;
        var date =data.articles[i].publishedAt;
        var outputNews =`<div class="main_news">
                                <a href="${url}" class="image_news" target='_blank' ><img src="${image}" ></a>
                            <div class ="Nav-news">
                                <a  class= "title" href="${url}" target="_blank"> ${title}</a> 
                                <p class= "date">${date}</p>
                                <p class= "description">${description}</p>
                            </div>
                        </div>`
       
        //Hiển thị tin tức tìm kiếm mới      
        $("#news").append(outputNews);
    
    }
        
});

});
});



// $.each(data.articles,function(){
//     console.log($this));
//     title=$(this)[0].title+"<br";
//     date=$(this)[0].publishedAt+"br";

// })

//  <script>
//         let fetchBtn = document.getElementById("fetchBtn");
  
//         fetchBtn.addEventListener("click", buttonclickhandler);
  
//         function buttonclickhandler() {
  
//             // Instantiate an new XHR Object
//             const xhr = new XMLHttpRequest();
  
//             // Open an obejct (GET/POST, PATH,
//             // ASYN-TRUE/FALSE)
//             xhr.open("GET", 
// "http://dummy.restapiexample.com/api/v1/employees", true);
  
  
  
  
//             // When response is ready
//             xhr.onload = function () {
//                 if (this.status === 200) {
  
//                     // Changing string data into JSON Object
//                     obj = JSON.parse(this.responseText);
  
//                     // Getting the ul element
//                     let list = document.getElementById("list");
//                     str = ""
//                     for (key in obj.data) {
//                         str += 
//                         `<li>${obj.data[key].employee_name}</li>`;
//                     }
//                     list.innerHTML = str;
//                 }
//                 else {
//                     console.log("File not found");
//                 }
//             }
//             xhr.send();
//         }
//     </script>
  