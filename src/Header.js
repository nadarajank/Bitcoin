import './Header.css';
const Header = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/kanyakumari/kanyakumari-kanyakumari-beach-0.jpg" alt="First slide"/>
                          </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.tripsavvy.com/thmb/m8GP7XQRlZj8OM8S1m9Jq_-lSgg=/2121x1193/smart/filters:no_upscale()/GettyImages-1171590321-366ab14d9da048158c2a52e1b851d8f0.jpg" alt="Second slide"/>
                         </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1534231852/Kanyakumari2345_1534231338.jpg" alt="Third slide"/>
                             </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
    );
}
export default Header;