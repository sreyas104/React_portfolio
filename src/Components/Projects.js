import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
// import "./index.css";

const images = [
  "https://jsbeginners.com/wp-content/uploads/2019/04/recipe-app-javascript-project-e1558042552865.png",
  "https://mikkegoes.com/wp-content/uploads/2020/03/Build-your-own-JavaScript-Tic-Tac-Toe-game.png",
  "https://opensource.com/sites/default/files/lead-images/browser_screen_windows_files.png",
  "https://opensource.com/sites/default/files/lead-images/browser_screen_windows_files.png",
  "https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_8/CEBiHHuu2asNHs7dCn-jbhoVuVMsrXkdgCPcBGAYYCw/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp",
  "https://miro.medium.com/max/1400/1*Zch2USa46ngMuAae7tC2WQ.png",
  "https://i.ytimg.com/vi/JYDxTt3ilh0/maxresdefault.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.webp",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.webp"
];

const smallImages = [
  "https://jsbeginners.com/wp-content/uploads/2019/04/recipe-app-javascript-project-e1558042552865.png",
  "https://mikkegoes.com/wp-content/uploads/2020/03/Build-your-own-JavaScript-Tic-Tac-Toe-game.png",
  "https://opensource.com/sites/default/files/lead-images/browser_screen_windows_files.png",
  "https://opensource.com/sites/default/files/lead-images/browser_screen_windows_files.png",
  "https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_8/CEBiHHuu2asNHs7dCn-jbhoVuVMsrXkdgCPcBGAYYCw/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp",
  "https://miro.medium.com/max/1400/1*Zch2USa46ngMuAae7tC2WQ.png",
  "https://i.ytimg.com/vi/JYDxTt3ilh0/maxresdefault.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.webp",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.webp"
];

class LightboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="p-5" style={{ backgroundColor: "#121327", }}>
        <h1 style={{ color: "#f5c533" }} className="text-center mb-5 pb-5">PROJECTS</h1>
        <MDBContainer>
          <div className="mdb-lightbox no-margin">
            <MDBRow>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[0]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 0, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[1]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 1, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[2]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 2, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[3]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 3, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[4]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 4, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[5]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 5, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[6]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 6, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[7]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 7, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
              <MDBCol md="4">
                <figure>
                  <img
                    src={smallImages[8]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 8, isOpen: true })
                    }
                  />
                </figure>
              </MDBCol>
            </MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </MDBContainer>
      </div>
    );
  }
}

export default LightboxPage;