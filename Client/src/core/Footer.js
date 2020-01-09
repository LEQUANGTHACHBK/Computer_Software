import React from "react";

const FooterPage = () => {
  // return (
  //   <div className="container mt-5">
  //       <div className="row bg-gray" id="contact">
  //           <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
  //               <h5>GIỚI THIỆU</h5>
  //               <div className="list-group list-group-flush">
  //                   <a href="#" className="footeritems">Trang chủ</a>
  //                   <a href="#" className="footeritems">Về Bách Khoa Computer</a>
  //                   <a href="#" className="footeritems">Điều khoản giao dịch</a>
  //                   <a href="#" className="footeritems">Bảo mật thông tin</a>
  //                   <a href="#" className="footeritems">Tuyển dụng</a>
  //               </div>
  //           </div>
  //
  //           <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
  //               <h5>CHÍNH SÁCH CÔNG TY</h5>
  //               <div className="list-group list-group-flush">
  //                   <a href="#" className="footeritems">Chính sách giao nhận</a>
  //                   <a href="#" className="footeritems">Chính sách đổi trả hàng</a>
  //                   <a href="#" className="footeritems">Phương thúc thanh toán</a>
  //                   <a href="#" className="footeritems">Chế độ bảo hành</a>
  //               </div>
  //           </div>
  //
  //
  //           <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
  //               <h5>HỖ TRỢ KHÁCH HÀNG</h5>
  //               <div className="list-group list-group-flush">
  //                   <a href="#" className="footeritems">Bảo hành (028)123456</a>
  //                   <a href="#" className="footeritems">Gửi yêu cầu bảo hành</a>
  //                   <a href="#" className="footeritems">Gửi yêu cầu đổi hàng</a>
  //                   <a href="#" className="footeritems">P. Kinh doanh: sales@memoryzone.com.vn</a>
  //                   <a href="#" className="footeritems">P. Hỗ trợ khách hàng: support@memoryzone.com.vn</a>
  //               </div>
  //           </div>
  //
  //           <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-justify">
  //               <h5>BÁCH KHOA COMPUTER</h5>
  //               <div className="list-group list-group-flush">
  //                   <a href="#" className="footeritems">HỒ CHÍ MINH: 4C Đồng Xoài, Phường 13, Quận Tân Bình</a>
  //                   <a href="#" className="footeritems">Điện thoại: (028) 7301 3878 - DĐ: 0909 305 350</a>
  //                   <a href="#" className="footeritems">Mở cửa: 9h đến 20h, Chủ nhật 10h đến 16h</a>
  //               </div>
  //           </div>
  //       </div>
  //   </div>
  // );
   return (
       <div>
           <div className="mt-5 pt-5 pb-5 footer">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-5 col-xs-12 about-company">
                           <h2>BÁCH KHOA COMPUTER</h2>
                           <p className="pr-5 text-white-50">Nơi mua sắm đáng tin cậy, bạn của mọi nhà </p>
                           <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i
                               className="fa fa-linkedin-square"></i></a></p>
                       </div>
                       <div className="col-lg-3 col-xs-12 links">
                           <h4 className="mt-lg-0 mt-sm-3">Chính sách cửa hàng</h4>
                           <ul className="m-0 p-0">
                               <li> <a href="#">Chính sách giao nhận</a></li>
                               <li> <a href="#">Chính sách đổi trả hàng</a></li>
                               <li> <a href="#">Phương thúc thanh toán</a></li>
                               <li> <a href="#">Chế độ bảo hành</a></li>
                           </ul>
                       </div>
                       <div className="col-lg-4 col-xs-12 location">
                           <h4 className="mt-lg-0 mt-sm-4">Địa chỉ</h4>
                           <p>4C Đồng Xoài, Phường 13, Quận Tân Bình, TPHCM</p>
                           <p className="mb-0">SĐT: <i className="fa fa-phone mr-3"></i>028 321 8521</p>
                           <p>Email: <i className="fa fa-envelope-o mr-3"></i>bkcomputer@svbk.com</p>
                           <p>Mở cửa: T2 - T7: 9h đến 20h - Chủ nhật: 10h đến 16h</p>
                       </div>
                   </div>
                   <div className="row mt-5">
                       <div className="col copyright">
                           <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
                       </div>
                   </div>
               </div>
           </div>
       </div>

   );
}

export default FooterPage;