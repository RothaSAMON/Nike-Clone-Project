class MainNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <nav>
          <!-- this is a top navbar section -->
          <div class="bg-gray-100 hidden lg:block">
              <div class="max-w-[1920px] mx-auto px-[30px] py-[6px] items-center flex justify-between">
                <div class="flex gap-6 max-w-full">
                  <img class="w-6 h-6" src="https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png" alt="logo">
                  <img class="w-6 h-6" src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg" alt="logo">
                </div>
                <ul class="flex max-w-full text-[12px]">
                  <li><a href="#">Find a Store<span class="pr-[8px] pl-[6px]">|</span></a></li>
                  <li><a href="#">Help<span class="pr-[8px] pl-[6px]">|</span></li>
                  <li><a href="#">Join Us<span class="pr-[8px] pl-[6px]">|</span></a></li>
                  <li><a href="#">Sign In</a></li>
                </ul>
              </div>
            </div>
            
          <!-- this is a main navbar section -->
          <div class="max-w-[1800px] mx-auto">
              <ul class="sidebar z-50 fixed overflow-y-auto top-0 right-0 h-[100vh] w-[350px] text-[24px] backdrop-blur-12 shadow-left list-none hidden flex-col justify-start bg-white backdrop-blur-blur lg:w-full">
                <!-- this is a navbar menu -->
                <button class="h-[50px] mr-auto w-full " id="menu-close" ><a class="h-full w-full px-[30px] flex justify-end items-center text-black " href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
                <li class="pr-[30px] w-full flex items-center"><a class="h-full w-full px-[30px] py-[10px] flex items-center text-black" href="/Nike-Clone-Project/public/second-page.html">New & Featured</a><a href="#"></a><svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg></li>
                <li class="w-full pr-[30px] flex items-center"><a class="h-full w-full px-[30px] py-[10px] flex items-center text-black" href="#">Men</a><a href="#"><svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg></a></li>
                <li class="pr-[30px] w-full flex items-center"><a class="h-full w-full px-[30px] py-[10px] flex items-center text-black" href="/Nike-Clone-Project/public/fifth-page.html">Women</a><a href="#"><svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg></a></li>
                <li class="pr-[30px] w-full flex items-center"><a class="h-full w-full px-[30px] py-[10px] flex items-center text-black" href="/Nike-Clone-Project/public/forth-page.html">Kids</a><a href="#"><svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg></a></li>
                <li class="pr-[30px] w-full flex items-center"><a class="h-full w-full px-[30px] py-[10px] flex items-center text-black" href="#">Accessories</a><a href="#"><svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg></a></li>
                <li class="pr-[30px] w-full flex items-center"><a class="h-full w-full px-[30px] py-[10px] flex items-center text-black" href="#">Sale</a><a href="#"><svg aria-hidden="true" class="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg></a></li>
                <!-- this is a two logo in the burger -->
                <div class="h-full w-full px-[25px] py-[25px] items-center text-[18px]">
                      <div class="items-center flex gap-[20px] py-[10px]">
                          <a class="" href="#"><svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32"><path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg></a>
                          <a href="#">Jordan</a>
                      </div>
                      <div class="items-center flex gap-[20px]">
                          <a href="#"><svg height="30px" width="30px" fill="#111" viewBox="0 0 39 33"><path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path></svg></a>
                          <a href="#">Converse</a>
                      </div>
                </div>
                <!-- this is a paragaph and two button section -->
                <div class="pt-[100px] px-[25px] text-start text-[20px] w-[350px]">
                  <p class="text-gray-500">Become a Nike Member for the best products, inspiration and stories in sport. <a class="text-black" href="#">Learn More</a></p>
                  <div class="text-center items-center flex gap-[10px] py-[50px]">
                      <div class="py-[8px] w-[100px] text-[16px] bg-black text-white rounded-3xl hover:opacity-[0.8] ">Join Us</div>
                      <div class="py-[8px] w-[100px] text-[16px] bg-white text-black rounded-3xl border-gray-500 hover:border-black border-[2px] ">Shop</div>
                  </div>
                </div>
                <!-- this is a 4 icons section -->
                <div class="mb-[40px]">
                  <div class="flex items-center text-[20px] px-[25px] gap-[20px] pb-[25px]">
                      <a href=/Nike-Clone-Project/public/sixth-page.html"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path></svg></a>
                      <a href="/Nike-Clone-Project/public/sixth-page.html">Bag</a>
                  </div>
  
                  <div class="flex items-center text-[20px] px-[25px] pb-[25px] gap-[20px]">
                      <a href="#"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path></svg></a>
                      <a href="#">Orders</a>
                  </div>
  
                  <div class="flex items-center text-[20px] px-[25px] pb-[25px] gap-[20px]">
                      <a href="#"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path></svg></a>
                      <a href="#">Find a Store</a>
                  </div>
  
                  <div class="flex items-center text-[20px] px-[25px] gap-[20px]">
                      <a href="#"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"></path></svg></a>
                      <a href="#">Help</a>
                  </div>
                </div>
              </ul>
              <div class="duration-700 fixed opacity-0 pointer-events-none top-0 left-0 w-full h-screen bg-black/20 backdrop-blur-sm z-[40]" id="blur-bg"></div>
            </div>
  
            <!-- this one is shown in the navbar normal size -->
            <div class="bg-white">
              <ul  class="max-w-[1920px] px-[30px] items-center mx-auto flex justify-between">
                  <li class=""><a class="h-full py-[13px] flex items-center text-black" href="/Nike-Clone-Project/index.html"><img class="w-[60px] hover:opacity-[0.7]" src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" alt="logo"></a></li>
                  <div class="hidden md:flex ml-[200px]">
                    <li class="hideOnMobile h-[50px] hidden xl:block" id="featured-btn" ><a class="h-full px-[10px] flex items-center text-black" href="/Nike-Clone-Project/public/second-page.html">New & Feature</a></li>
                    <li class="hideOnMobile h-[50px] hidden xl:block" id="featured-btn" ><a class="h-full px-[10px] flex items-center text-black" href="#">Men</a></li>
                    <li class="hideOnMobile h-[50px] hidden lg:block" id="featured-btn"><a class="h-full px-[10px] flex items-center text-black" href="/Nike-Clone-Project/public/fifth-page.html">Women</a></li>
                    <li class="hideOnMobile h-[50px] hidden lg:block" id="featured-btn"><a class="h-full px-[10px] flex items-center text-black" href="/Nike-Clone-Project/public/forth-page.html">Kids</a></li>
                    <li class="hideOnMobile h-[50px] hidden lg:block" id="featured-btn"><a class="h-full px-[10px] flex items-center text-black" href="#">Accessories</a></li>
                    <li class="hideOnMobile h-[50px] hidden lg:block" id="featured-btn"><a class="h-full px-[10px] flex items-center text-black" href="#">Sale</a></li>
                  </div>
                  <div class="flex gap-[5px] items-center">
                    <div class="relative hidden lg:block">
                      <a class="absolute top-4 pl-2 transform -translate-y-2/4 w-4 h-4" href="#"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg></a>
                      <input type="text" placeholder="Search" class="block w-full pl-8 py-2 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <!-- <img src="https://cdn-icons-png.flaticon.com/512/109/109612.png" alt="Search icon"> -->
                    </div>
                      <li class="menu-button flex">
                      <a class="h-full flex items-center  px-[10px] text-black lg:hidden" href="#"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg></a></li>
                      <a class="h-full flex items-center px-[10px] text-black" href="/Nike-Clone-Project/public/sixth-page.html"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg></a></li>
                      <a class="h-full flex items-center px-[10px] text-black" href="#"><svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph" style="display: inline-block;"><path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"></path></svg></a>
                      <!-- this is a burger button -->
                      <a class="h-full flex items-center px-[10px] text-black lg:hidden" id="menu-btn" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a>
                  </div>
                </ul>
            </div>
  
            <!-- drop down sub menu -->
            <div class="dropdown-navbar lg:z-[50] bg-white w-full max-h-[0px] overflow-hidden duration-300 ease-in-out fixed z-[20] shadow-md" id="feature-dropdown">
              <ul class="max-w-[920px] justify-between mx-auto flex px-[20px] py-[40px] text-gray-500">
                  <div>
                      <h2 class="pb-[20px] text-black">Jordan Family Days</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Shop the Collection</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Shop All Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">New Release</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Men</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Women</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Kids</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Baseketball</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">New & Featured</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">New Arrivals</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Best Sellers</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Member Product</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">New & Upcoming Drops</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">SNKRS Launch Calendar</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Mother's Day Shop</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Add to Bag to See Price</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Sale: Up to 50% Off</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shop Classics</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Air Jordan 1</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Air Force</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Dunk</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Air Max</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Blazer</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">New For Men</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Clothing</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">New For Women</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Clothing</a></li>
                      </ul class="pb-[20px] text-black">
                      <h2 class="py-[20px] text-black">New For Kids</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/second-page.html">Clothing</a></li>
                      </ul>
                  </div>
              </ul>
            </div>
  
            
            <!-- second dropdown -->
            <div class="bg-white w-full  lg:z-[50] max-h-[0px] overflow-hidden duration-300 ease-in-out fixed z-[20] shadow-md" id="feature-dropdown">
              <ul class="max-w-[920px] justify-between mx-auto flex px-[20px] py-[40px] text-gray-500">
                  <div>
                      <h2 class="pb-[20px] text-black">Jordan Family Days</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Shop the Collection</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">New & Featured</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">New Arrivals</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Best Sellers</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Customize with Nike by YOU</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Trending: Nike Life</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">New in Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Add to Bag to See Price</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Sale: Up to 50% Off</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">All Shoes</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Lifestyle</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Dunk</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Air Max</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Air Force 1</a></li>
  
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Nike SB</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Sandals & Slides</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Shoes $100 & Under</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">All Clothing</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Matching Sets</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Big & Tall</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Hoodies & Sweatshirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Oants & Tights</a></li>
  
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Jackets & Vests</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Tops & T-Shirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Shorts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Underwear</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Socks</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shop by Sport</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Golf</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Soccer</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Tennis</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Baseketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Football</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Trall Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Swimming</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="/Nike-Clone-Project/public/third-page.html">Pickleball</a></li>
                      </ul>
                  </div>
              </ul>
            </div>
  
            <!-- third dropdown -->
            <div class="bg-white w-full lg:z-[50] max-h-[0px] overflow-hidden duration-300 ease-in-out fixed z-[20] shadow-md" id="feature-dropdown">
              <ul class="max-w-[920px] justify-between mx-auto flex px-[20px] py-[40px] text-gray-500">
                  <div>
                      <h2 class="pb-[20px] text-black">New & Featured</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">New Arrivals</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Best Sellers</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Add to bag to See Price</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Add to Bag to See Price</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">Collections</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Mother's Day Shop</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">The Color Shop</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Zenvy Collection</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Loungewear</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan family Days</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shoes</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">All Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Lifestyle</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Dunk</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Lifestyle Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Max</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Force 1</a></li>
  
                          <li class="pb-[10px] hover:text-black"><a href="#">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Nike SB</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Sandals & Slides</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Nike by You</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shoes $100 & Under</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Clothing</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Lifestyle</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Dunk</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Max</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Force 1</a></li>
  
                          <li class="pb-[10px] hover:text-black"><a href="#">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Nike SB</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Sandals & Slides</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shoes $100 & Under</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">All Clothing</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Matching Sets</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Big & Tall</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Hoodies & Sweatshirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Oants & Tights</a></li>
  
                          <li class="pb-[10px] hover:text-black"><a href="#">Jackets & Vests</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Tops & T-Shirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shorts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Underwear</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Socks</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shop by Sport</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Golf</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Soccer</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Tennis</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Baseketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Football</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Trall Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Swimming</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Pickleball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Fan Gear</a></li>
                      </ul>
                  </div>
              </ul>
            </div>
  
  
            <!-- forth dropdown -->
            <div class="bg-white w-full lg:z-[50]  max-h-[0px] overflow-hidden duration-300 ease-in-out fixed z-[20] shadow-md" id="feature-dropdown">
              <ul class="max-w-[920px] justify-between mx-auto flex px-[20px] py-[40px] text-gray-500">
                  <div>
                      <h2 class="pb-[20px] text-black">New & Featured</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">New Arrivals</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Best Sellers</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Add to bag to See Price</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Add to Bag to See Price</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">Collections</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Mother's Day Shop</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">The Color Shop</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Zenvy Collection</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Loungewear</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan family Days</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shoes by Size</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Big Kids (1Y - 7Y)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Little Kids (8C - 3Y)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Baby & Toddler (0M - 4T)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Extended Sizing</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">All Shoes</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Lifestyle</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Dunk</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Max</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Force 1</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Nike SB</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Sandals & Slides</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shoes $100 & Under</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Clothing by Size</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Big Kids (XS - XL)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Little Kids (4 - 7)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Baby & Toddler (0M - 4T)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Extended Sizing</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">All Clothing</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Hoodies & Swearshirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Pants & Tights</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jackets & Vests</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Top & T-Shirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shorts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Skirts & Dresses</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Bras</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Matching Sets</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shop by Sport</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Golf</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Soccer</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Tennis</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Baseketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Football</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Trall Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Swimming</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Pickleball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Fan Gear</a></li>
                      </ul>
                  </div>
              </ul>
            </div>
  
  
            <!-- fith dropdown -->
            <div class="bg-white w-full  lg:z-[50] max-h-[0px] overflow-hidden duration-300 ease-in-out fixed z-[20] shadow-md" id="feature-dropdown">
              <ul class="max-w-[920px] justify-between mx-auto flex px-[20px] py-[40px] text-gray-500">
                  <div>
                      <h2 class="pb-[20px] text-black">All Sale</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Sale Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Sale Clothing</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Sale Accessories</a></li>  
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Men</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Clothing</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Accessories</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shop All</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Women</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Clothing</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Accessories</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shop All</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Kids</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shoes</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Clothing</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Accessories</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shop All</a></li>
                      </ul>
                  </div>
              </ul>
            </div>
  
  
            <!-- sixth dropdown -->
            <div class="bg-white w-full lg:z-[50]  max-h-[0px] overflow-hidden duration-300 ease-in-out fixed z-[20] shadow-md" id="feature-dropdown">
              <ul class="max-w-[920px] justify-between mx-auto flex px-[20px] py-[40px] text-gray-500">
                  <div>
                      <h2 class="pb-[20px] text-black">New & Featured</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">New Arrivals</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Best Sellers</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Add to bag to See Price</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Add to Bag to See Price</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">Collections</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Mother's Day Shop</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">The Color Shop</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Zenvy Collection</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Loungewear</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan family Days</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shoes by Size</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Big Kids (1Y - 7Y)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Little Kids (8C - 3Y)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Baby & Toddler (0M - 4T)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Extended Sizing</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">All Shoes</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Lifestyle</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Dunk</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Max</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Air Force 1</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Nike SB</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Sandals & Slides</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shoes $100 & Under</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Clothing by Size</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Big Kids (XS - XL)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Little Kids (4 - 7)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Baby & Toddler (0M - 4T)</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Extended Sizing</a></li>
                      </ul>
                      <h2 class="py-[20px] text-black">All Clothing</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Hoodies & Swearshirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Pants & Tights</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jackets & Vests</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Top & T-Shirts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Shorts</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Skirts & Dresses</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Bras</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Matching Sets</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Jordan</a></li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="pb-[20px] text-black">Shop by Sport</h2>
                      <ul>
                          <li class="pb-[10px] hover:text-black"><a href="#">Basketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Golf</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Soccer</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Tennis</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Baseketball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Football</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Training & Gym</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Trall Running</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Swimming</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Pickleball</a></li>
                          <li class="pb-[10px] hover:text-black"><a href="#">Fan Gear</a></li>
                      </ul>
                  </div>
              </ul>
            </div>
      </nav>
          `;
    }
  }
  

customElements.define("main-navbar", MainNavbar);

//bottom menu
class bottomMenu extends HTMLElement {
connectedCallback() {
    this.innerHTML = `
        <!-- this is the footer section -->
        <div class="max-w-[1360px] pt-[60px] px-[40px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-4 text-gray-500" id="mainFooterDrop">
                <ul>			
                    <h2 class="pb-[24px] lg:cursor-auto cursor-pointer text-black"><a href="/Nike-Clone-Project/public/second-page.html">Featured</a></h2>
                    <div class="hidden lg:block">
                        <li class="pb-[16px] hover:text-black"><a href="#">Air Force 1</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Jordan 1</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Metcon</a></li>
                        <div class="hidden" id="footerDropdown">
                            <li class="pb-[16px] hover:text-black"><a href="#">Air Max 270</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Air Max 97</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Air Max 90</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Blazer</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Pegasus</a></li>
                        </div>
                    </div>
                </ul>

                <ul>
                    <h2 class="pb-[24px] lg:cursor-auto cursor-pointer text-black"><a href="/Nike-Clone-Project/public/third-page.html">Shoes</a></h2>
                    <div class="hidden lg:block">
                        <li class="pb-[16px] hover:text-black"><a href="#">All Shoes</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Jordan Shoes</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Running Shoes</a></li>
                        <div class="hidden" id="footerDropdown2">
                            <li class="pb-[16px] hover:text-black"><a href="#">Basketball Shoes</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Tennis Shoes</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Training Shoes</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Custom Shoes</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Sale Shoes</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Soccer Cleats</a></li>
                        </div>
                    </div>
                    
                </ul>

                <ul>
                    <h2 class="pb-[24px] lg:cursor-auto cursor-pointer text-black">Clothing</h2>
                    <div class="hidden lg:block">
                        <li class="pb-[16px] hover:text-black"><a href="#">All Clothing</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Tops & T-Shirts</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Shorts</a></li>
                        <div class="hidden" id="footerDropdown3">
                            <li class="pb-[16px] hover:text-black"><a href="#">Hoodies & Pullovers</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Joggers & Sweatpants</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Sports Bras</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Socks</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Yoga</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">NikeLab</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Plus Size</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Big & Tall</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Sale Clothing</a></li>
                        </div>
                    </div>
                </ul>

                <ul>
                    <h2 class="pb-[24px] lg:cursor-auto cursor-pointer text-black"><a href="/Nike-Clone-Project/public/forth-page.html">Kids</a></h2>
                    <div class="hidden lg:block">
                        <li class="pb-[16px] hover:text-black"><a href="#">Infant & Toddler Shoes</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Kids Shoes</a></li>
                        <li class="pb-[16px] hover:text-black"><a href="#">Kids Basketball Shoes</a></li>
                        <div class="hidden" id="footerDropdown4">
                            <li class="pb-[16px] hover:text-black"><a href="#">Kids Running Shoes</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Kids Jordan Shoes</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Kids Clothing</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Kids Backpacks</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Kids Socks</a></li>
                            <li class="pb-[16px] hover:text-black"><a href="#">Kids Sale</a></li>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    `;
    }
}
customElements.define("bottom-menu", bottomMenu);

// this is footer
class FooterSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- this is the last footer -->
	<footer class="bg-black">
		<div class="max-w-[1360px] mx-auto pt-[40px] px-[40px] text-[12px] text-gray-400">
			<!-- this controll the top section -->
			<section class="lg:flex lg:justify-between">
				<!-- this the left side -->
				<div class="lg:flex gap-[60px]">
					<ul class="text-white">
						<li class="pb-[16px]"><a href="#">RESOURCES</a></li>
						<li class="pb-[16px]"><a href="#">GIFT CARDS</a></li>
						<li class="pb-[16px]"><a href="#">FIND A STORE</a></li>
						<li class="pb-[16px]"><a href="#">BECOME A MEMBER</a></li>
						<li class="pb-[16px]"><a href="#">NIKE X NBA</a></li>
						<li class="pb-[16px]"><a href="#">NIKE JOURNAL</a></li>
						<li class="pb-[16px]"><a href="#">Site Feedback</a></li>
					</ul>
					<hr class="border-b mb-[18px] border-gray-500">
					<ul class="">
						<li class="text-white lg:pb-[16px] pb-[40px]"><a href="#">HELP</a></li>
						<div class="hidden lg:block">
							<li class="pb-[16px] hover:text-white"><a href="#">Order Status</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Shipping and Delivery</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Returns</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Order Cancellation</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Payment Options</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Gift Card Balance</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Contact Us</a></li>
						</div>
						
					</ul>
					<ul class="">
						<li class="text-white lg:pb-[16px] pb-[40px]"><a href="#">COMPANY</a></li>
						<div class="hidden lg:block">
							<li class="pb-[16px] hover:text-white"><a href="#">About Nike</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">News</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Careers</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Investors</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Purpose</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Sustainability</a></li>
						</div>
						
					</ul>
					<ul class="">
						<li class="text-white lg:pb-[16px] pb-[40px]"><a href="#">PROMOTIONS & DISCOUNTS</a></li>
						<div class="hidden lg:block">
							<li class="pb-[16px] hover:text-white"><a href="#">Student</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Military</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Returns</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Teacher</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">First Responders & Medical</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Professionals</a></li>
							<li class="pb-[16px] hover:text-white"><a href="#">Birthday</a></li>
						</div>
						
					</ul>
				</div>
				<!-- this the right side -->
				<div class="flex lg:justify-end gap-[16px]">
					<div class="w-8 h-8 bg-gray-500 rounded-3xl hover:bg-white">
						<a href="https://twitter.com/Nike?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://pixsector.com/cache/f8dbbdb2/avb37443a9d16e06eef66.png" alt="icon"></a>
					</div>
					<div class="w-8 h-8 bg-gray-500 rounded-3xl hover:bg-white">
						<a href="https://www.facebook.com/nike/"><img src="https://pixsector.com/cache/c2d6c2a1/av580aef89b415365fb9c.png" alt="icon"></a>
					</div>
					<div class="w-8 h-8 bg-gray-500 rounded-3xl hover:bg-white">
						<a href="https://www.youtube.com/NIKE"><img src="https://icons.veryicon.com/png/o/miscellaneous/alibaba-cloud-ui-icon-library/youtube-150.png" alt="icon"></a>
					</div>
					<div class="w-8 h-8 bg-gray-500 rounded-3xl hover:bg-white">
						<a href="https://www.instagram.com/nike/?hl=en"><img src="https://icones.pro/wp-content/uploads/2021/02/icone-instagram-logo1.png" alt="icon"></a>
					</div>
				</div>
			</section>

			<!-- this controll the bottom section -->
			<section class="lg:flex lg:justify-between items-center pt-[60px] pb-[20px]">
				<div class="lg:flex  pb-[14px] gap-[20px]">
					<div class="flex items-center gap-[8px]  pb-[14px]">
						<a href="#"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="15px" fill="none"><path fill="#FFFFFF" fill-rule="evenodd" d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" clip-rule="evenodd"></path></svg></a>
						<a class="text-white" href="#">Unired States</a>
					</div>
					<p>© 2024 Nike, Inc. All Rights Reserved</p>
				</div>
				<div>
					<div class="grid grid-cols-1 lg:flex justify-end gap-[20px] mb-[14px]">
						<a class=" hover:text-white" href="">Guides</a>
						<a class=" hover:text-white" href="">Terms of Sale</a>
						<a class=" hover:text-white" href="">Term of Use</a>
						<a class=" hover:text-white" href="">Nike Privacy Policy</a>
					</div>

					<div class="lg:flex justify-end gap-[20px]">
						<div class="flex lg:justify-end pb-[14px] items-center gap-[6px]">
							<img alt="Your Privacy Choices" class="d-sm-ib mr1-sm mb-[4px]" src="https://static.nike.com/a/images/w_960,c_limit/81a78fa9-0756-42ac-adb0-33c0245bf27a/image.png">
							<a class=" hover:text-white" href="#">Your Privacy Choices</a>
						</div>
						<a class=" hover:text-white" href="#">CA Supply Chains Act</a>
					</div>
				</div>
			</section>
		</div>
	</footer>
        `;
  }
}

customElements.define("footer-section", FooterSection);


class HeaderStoreSection extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    <!-- this is the top nav discount section -->
    <div class="bg-white">
        <div class="max-w-[1920px] mx-auto p-2 flex justify-center">
            <div class="flex justify-center gap-20 text-sm">
            <svg
                class="w-2 cursor-pointer hover:fill-black"
                aria-hidden="true"
                fill="#A5A5A5"
                height="30px"
                width="30px"
                viewBox="0 0 185.4 300">
                <path
                d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
			</svg>
			<a class="underline pt-1" href="#">Sale: Up to 50% off</a>
			<svg
                class="w-2 cursor-pointer hover:fill-black"
                aria-hidden="true"
                fill="#A5A5A5"
                height="30px"
                width="30px"
                viewBox="0 0 185.4 300">
                <path
                d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
            </svg>
            </div>
        </div>
    </div>


	<!-- In here is the header of this content -->
    <div class="max-w-[1920px] mx-auto">
		<div class="max-w-full h-10 bg-white mx-auto flex justify-between px-[30px] my-[20px]">
			<p class="text-2xl">Jordan Family Days (111)</p>
			<div class="hidden lg:flex mt-2 gap-10">
				<div class="gap-2 flex">
					<p>Show Filters</p>
					<svg
					aria-hidden="true"
					class="icon-filter-ds"
					focusable="false"
					viewBox="0 0 24 24"
					role="img"
					width="24px"
					height="24px"
					fill="none"
					>
					<path
						stroke="currentColor"
						stroke-width="1.5"
						d="M21 8.25H10m-5.25 0H3"
					></path>
					<path
						stroke="currentColor"
						stroke-width="1.5"
						d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
						clip-rule="evenodd"
					></path>
					<path
						stroke="currentColor"
						stroke-width="1.5"
						d="M3 15.75h10.75m5 0H21"
					></path>
					<path
						stroke="currentColor"
						stroke-width="1.5"
						d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
						clip-rule="evenodd"
					></path>
					</svg>
				</div>
				<div class="gap-2 flex">
					<p>Sort By</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<path
					d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
					/>
					</svg>
				</div>
			</div>
		</div>
	</div>


	<!-- this is the new responsive of the menu -->
	<div class="max-w-[1920px] overflow-x-auto mx-auto block lg:hidden">
		<div class="flex w-[1500px] gap-[40px] px-[30px]">
			<a class="my-1" href="#">Shoes</a>
			<a class="my-1" href="#">Hoodies & Pullovers</a>
			<a class="my-1" href="#">Pants & Tights</a>
			<a class="my-1" href="#">Jackets & Vests</a>
			<a class="my-1" href="#">Tops & T-Shirts</a>
			<a class="my-1" href="#">Shorts</a>
			<a class="my-1" href="#">Tights & Leggins</a>
			<a class="my-1" href="#">Sports Bras</a>
			<a class="my-1" href="#">Jordan</a>
			<a class="my-1" href="#">Socks</a>
			<a class="my-1" href="#">Accessories & Equiment</a>
		</div>
		<hr class="my-3 text-black w-[1500px]">
	</div>
	<div class="max-w-[1920px] mx-auto">
		<div class="flex lg:hidden gap-2 items-center justify-between  px-[30px] pb-4">
			<p class="">Pick Up Today</p>
			<label class="inline-flex cursor-pointer">
				<input type="checkbox" value="" class="sr-only peer">
				<div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span class="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300"></span>
			</label>
		</div>
	</div>
    `;
    }
}

customElements.define("header-store-section", HeaderStoreSection);

//This is a sidebar static component
class SidebarSection extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    <div class="w-full mr-[40px] hidden lg:block">
        <div class="hidden items-center lg:flex gap-2 justify-start pb-4">
            <p class="pt-2">Pick Up Today</p>
            <label class="inline-flex cursor-pointer pt-2">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300"></span>
            </label>
        </div>
        <div class="flex flex-col m-4 pb-10 border-t-2">
            <a class="my-1" href="#">Shoes</a>
            <a class="my-1" href="#">Hoodies & Pullovers</a>
            <a class="my-1" href="#">Pants & Tights</a>
            <a class="my-1" href="#">Jackets & Vests</a>
            <a class="my-1" href="#">Tops & T-Shirts</a>
            <a class="my-1" href="#">Shorts</a>
            <a class="my-1" href="#">Tights & Leggins</a>
            <a class="my-1" href="#">Sports Bras</a>
            <a class="my-1" href="#">Jordan</a>
            <a class="my-1" href="#">Socks</a>
            <a class="my-1" href="#">Accessories & Equiment</a>
        </div>
        <hr class="my-2 text-black">


        <!-- Group 1 -->
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onclick="dropDown('group1', 1)">
            <div class="flex justify-between w-full items-center" onclick="dropDown()">
                <span class="text-[16px] text-black">Gender</span>
                    <span class="text-sm rotate-0" id="group1arrow1">
                    <i class="bi bi-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="leading-7 text-left text-sm mt-2 w-[90%] mx-auto hidden" id="group1submenu1">
                <div class="flex items-center gap-2">
                    <input class="w-5 h-5 cursor-pointer" type="checkbox">
                    <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Men</h1>
                </div>
                
                <div class="flex items-center gap-2">
                    <input class="w-5 h-5 cursor-pointer" type="checkbox">
                    <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Women</h1>
                </div>
        
                <div class="flex items-center gap-2">
                    <input class="w-5 h-5 cursor-pointer" type="checkbox">
                    <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Unisex</h1>
                </div>
        </div>
        <hr class="my-2 text-black">
        
        
        
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onclick="dropDown('group1', 2)">
            <div class="flex justify-between w-full items-center" onclick="dropDown2()">
                <span class="text-[16px] text-black">Kids</span>
                <span class="text-sm rotate-0" id="group1arrow2">
                    <i class="bi bi-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="leading-7 text-left text-sm mt-2 w-[90%] mx-auto hidden" id="group1submenu2">
                <div class="flex items-center gap-2">
                    <input class="w-5 h-5 cursor-pointer" type="checkbox">
                    <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Boys</h1>
                </div>
                
                <div class="flex items-center gap-2">
                    <input class="w-5 h-5 cursor-pointer" type="checkbox">
                    <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Girls</h1>
                </div>
        </div>
        <hr class="my-2 text-black">
        
        
        
        
        <!-- Group 2 -->
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onclick="dropDown('group2', 1)">
            <div class="flex justify-between w-full items-center" onclick="dropDown3()">
                <span class="text-[16px] text-black">Sale & Offers</span>
                <span class="text-sm rotate-0" id="group2arrow1">
                    <i class="bi bi-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="leading-7 text-left text-sm mt-2 w-[90%] mx-auto hidden" id="group2submenu1">
                <div class="flex items-center gap-2">
                    <input class="w-5 h-5 cursor-pointer" type="checkbox">
                    <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Price in Bag</h1>
                </div>
                
                <div class="flex items-center gap-2">
                    <input class="w-5 h-5 cursor-pointer" type="checkbox">
                    <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Sale</h1>
                </div>
        </div>
        <hr class="my-2 text-black">
        
        
        
        
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onclick="dropDown('group2', 2)">
            <div class="flex justify-between w-full items-center" onclick="dropDown4()">
                <span class="text-[16px] text-black">Colors</span>
                <span class="text-sm rotate-0" id="group2arrow2">
                    <i class="bi bi-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="leading-7 text-left text-sm mt-2 w-[90%] mx-auto hidden" id="group2submenu2">
            <!-- this controll the flex one line of the colors: 3 colors -->
            <div class="grid grid-cols-3 gap-4">
                <div class="pb-[20px]">
                    <button class="w-8 h-8 border border-gray-400 bg-black rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">Black</h1>
                </div>
                
                <div class="pb-[20px]">
                    <button class="w-8 h-8 border border-gray-400 bg-blue-500 rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">Blue</h1>
                </div>
        
                <div class="pb-[20px]">
                    <button class="w-8 h-8 border border-gray-400 bg-orange-950 rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">Brown</h1>
                </div>
            </div>
            <!-- this controll the flex one line of the colors: 3 colors -->
            <div class="grid grid-cols-3 gap-4">
                <div class="pb-[20px]">
                    <button class="w-8 h-8 border border-gray-400 bg-green-600 rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">Green</h1>
                </div>
                
                <div class="pb-[20px]">
                    <button class="w-8 h-8 border border-gray-400 bg-gray-500 rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">Grey</h1>
                </div>
        
                <div class="pb-[20px]">
                    <button class="w-8 h-8 border border-gray-400 bg-pink-500 rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">Pink</h1>
                </div>
            </div>
            <!-- this controll the flex one line of the colors: 2 colors -->
            <div class="grid grid-cols-3 gap-4">
                <div class="">
                    <button class="w-8 h-8 border border-gray-400 bg-red-600 rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">Red</h1>
                </div>
                
                <div class="">
                    <button class="w-8 h-8 border border-gray-400 bg-White rounded-3xl"></button>
                    <h1 class="cursor-pointer hover:text-gray-700">White</h1>
                </div>
            </div>
        </div>
        <hr class="my-2 text-black">
        
        
        <!-- Group 5 -->
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onclick="dropDown('group3', 1)">
            <div class="flex justify-between w-full items-center" onclick="dropDown5()">
                <span class="text-[16px] text-black">Shop by Price</span>
                <span class="text-sm rotate-0" id="group3arrow1">
                    <i class="bi bi-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="leading-7 text-left text-sm mt-2 w-[90%] mx-auto hidden" id="group3submenu1">
            <div class="flex items-center gap-2">
                <input class="w-5 h-5 cursor-pointer" type="checkbox">
                <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">$0 - $25</h1>
            </div>
            
            <div class="flex items-center gap-2">
                <input class="w-5 h-5 cursor-pointer" type="checkbox">
                <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">$25 - $50</h1>
            </div>
        
            <div class="flex items-center gap-2">
                <input class="w-5 h-5 cursor-pointer" type="checkbox">
                <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">$50 - $100</h1>
            </div>
        
            <div class="flex items-center gap-2">
            <input class="w-5 h-5 cursor-pointer" type="checkbox">
            <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">$100 - $150</h1>
            </div>
            <div class="flex items-center gap-2">
            <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">+ More</h1>
            </div>
        </div>
        <hr class="my-2 text-black">
        
        
        <!-- Group 6 -->
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onclick="dropDown('group3', 2)">
            <div class="flex justify-between w-full items-center" onclick="dropDown6()">
                <span class="text-[16px] text-black">Brand</span>
                <span class="text-sm rotate-0" id="group3arrow2">
                    <i class="bi bi-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="leading-7 text-left text-sm mt-2 w-[90%] mx-auto hidden" id="group3submenu2">
            <div class="flex items-center gap-2">
                <input class="w-5 h-5 cursor-pointer" type="checkbox">
                <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Jordan</h1>
            </div>
        </div>
        <hr class="my-2 text-black">
        
        
        <!-- Group 7 -->
        <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onclick="dropDown('group4', 1)">
            <div class="flex justify-between w-full items-center" onclick="dropDown7()">
                <span class="text-[16px] text-black">Sports & Activities</span>
                <span class="text-sm rotate-0" id="group4arrow1">
                    <i class="bi bi-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="leading-7 text-left text-sm mt-2 w-[90%] mx-auto hidden" id="group4submenu1">
            <div class="flex items-center gap-2">
                <input class="w-5 h-5 cursor-pointer" type="checkbox">
                <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Lifestyle</h1>
            </div>
            <div class="flex items-center gap-2">
            <input class="w-5 h-5 cursor-pointer" type="checkbox">
            <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Running</h1>
            </div>
            <div class="flex items-center gap-2">
            <input class="w-5 h-5 cursor-pointer" type="checkbox">
            <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Training & Gym</h1>
            </div>
            <div class="flex items-center gap-2">
            <input class="w-5 h-5 cursor-pointer" type="checkbox">
                <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">Basketball</h1>
            </div>
            <div class="flex items-center gap-2">
            <h1 class="cursor-pointer hover:text-gray-700 rounded-md mt-1">+ More</h1>
            </div>
        </div>
        <hr class="my-2 text-black">
    </div>
    `;
    }
}

customElements.define("sidebar-section", SidebarSection);


// this is a responsive navbar burger
const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
menuBtn.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    const blurBg = document.getElementById("blur-bg");
    blurBg.classList.remove("opacity-0");
    blurBg.classList.remove("pointer-events-none");
    document.querySelector("body").classList.toggle("overflow-y-hidden");
});

menuClose.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    const blurBg = document.getElementById("blur-bg");
    blurBg.classList.add("opacity-0");
    blurBg.classList.add("pointer-events-none");
    document.querySelector("body").classList.toggle("overflow-y-hidden");
});
// ---------
function Openbar() {
    document.querySelector(".sidebar").classList.toggle("left-[-300px]");
}




// ========Here is the Hover: and Drop down the sub navbar=========
// dropdown of navbar section
const featureBtns = document.querySelectorAll("#featured-btn");
const featureDropdowns = document.querySelectorAll("#feature-dropdown");

featureBtns.forEach((subFeatureBtn, index) => {
    subFeatureBtn.addEventListener("mouseenter", () => {
    // Hide all dropdowns
    featureDropdowns.forEach(dropdown => {
        dropdown.classList.remove("max-h-[800px]");
    });
    // Show the dropdown associated with the current button
    featureDropdowns[index].classList.add("max-h-[800px]");
});

subFeatureBtn.addEventListener("mouseleave", () => {
    // Hide the dropdown associated with the current button when mouse leaves
    featureDropdowns[index].addEventListener("mouseleave", () => {
        featureDropdowns[index].classList.remove("max-h-[800px]");
        
        });
    });
});

featureDropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener("mouseenter", () => {
        // Show the dropdown when mouse enters, even if not hovering over button
        dropdown.classList.add("max-h-[800px]");

    });

    dropdown.addEventListener("mouseleave", () => {
        // Hide the dropdown when mouse leaves if not hovering over button
        dropdown.classList.remove("max-h-[800px]");
    });
});




// ========Here is the Hover: and Drop down the sub footer=========
// dropdown of footer section
const footerBtn = document.getElementById('mainFooterDrop')
const footerDropdown = document.getElementById('footerDropdown')
// this one is make remove hidden when hover
footerBtn.addEventListener('mouseenter', () => {
    footerDropdown.classList.remove('hidden')
    })
    footerBtn.addEventListener('mouseleave', () => {
    footerDropdown.classList.add('hidden')
    })
    // this one is make remove hidden when hover
    footerBtn.addEventListener('mouseenter', () => {
    footerDropdown.classList.remove('hidden')
    })


const footerBtn2 = document.getElementById('mainFooterDrop')
const footerDropdown2 = document.getElementById('footerDropdown2')
    // this one is make remove hidden when hover
    footerBtn2.addEventListener('mouseenter', () => {
    footerDropdown2.classList.remove('hidden')
    })
    footerBtn2.addEventListener('mouseleave', () => {
    footerDropdown2.classList.add('hidden')
    })
    // this one is make remove hidden when hover
    footerDropdown2.addEventListener('mouseenter', () => {
    footerDropdown2.classList.remove('hidden')
    })


const footerBtn3 = document.getElementById('mainFooterDrop')
const footerDropdown3 = document.getElementById('footerDropdown3')
    // this one is make remove hidden when hover
    footerBtn3.addEventListener('mouseenter', () => {
    footerDropdown3.classList.remove('hidden')
    })
    footerBtn3.addEventListener('mouseleave', () => {
    footerDropdown3.classList.add('hidden')
    })
    // this one is make remove hidden when hover
    footerDropdown3.addEventListener('mouseenter', () => {
    footerDropdown3.classList.remove('hidden')
    })


const footerBtn4 = document.getElementById('mainFooterDrop')
const footerDropdown4 = document.getElementById('footerDropdown4')
    // this one is make remove hidden when hover
    footerBtn4.addEventListener('mouseenter', () => {
    footerDropdown4.classList.remove('hidden')
    })
    footerBtn4.addEventListener('mouseleave', () => {
    footerDropdown4.classList.add('hidden')
    })
    // this one is make remove hidden when hover
    footerDropdown4.addEventListener('mouseenter', () => {
    footerDropdown4.classList.remove('hidden')
    })


// This is sidebar drop down
// Generic dropdown function
function dropDown(group, index) {
    document.querySelector(`#${group}submenu${index}`).classList.toggle('hidden');
    document.querySelector(`#${group}arrow${index}`).classList.toggle('rotate-180');
}
