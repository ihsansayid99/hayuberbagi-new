import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import styled from "styled-components";
import { Container } from "../styles/global-css";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";

//ICON
import IconBerbagiNasi from "../public/icon/ic-berbaginasi.svg";
import IconKelasYatim from "../public/icon/ic-kelasyatim.svg";
import IconWisataYatim from "../public/icon/ic-wisatayatim.svg";
import IconAuthor from "../public/icon/ic-author.svg";

const SectionOne = styled.section`
  background-color: ${colors.orangeLight};
  height: 650px;
  @media all and (max-width: 480px) {
    height: calc(650px + 6rem);
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    height: calc(650px + 15rem);
  }
`;

const Menu = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperListMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media all and (max-width: 480px) {
    display: block;
    background-color: ${colors.orangeLight};
    width: ${(props) => (props.openNavs ? "100%" : "0")};
    height: 100% !important;
    position: fixed;
    top: 8rem;
    left: 0;
    height: 300px;
    z-index: 100;
    overflow-x: hidden;
    transition: 0.5s;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    display: block;
    background-color: ${colors.orangeLight};
    width: ${(props) => (props.openNavs ? "100%" : "0")};
    height: 100% !important;
    position: fixed;
    top: 8rem;
    left: 0;
    height: 300px;
    z-index: 100;
    overflow-x: hidden;
    transition: 0.5s;
  }
`;

const ListMenu = styled.li`
  margin: 0 1rem;
  font-weight: bold;
  color: ${colors.gray};

  &:hover {
    color: gray;
  }
  @media all and (max-width: 480px) {
    margin: 1rem 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    margin: 1rem 1rem;
  }
`;

const ButtonGreen = styled.a`
  background-color: ${colors.green};
  padding: 0.6rem 2rem;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.darkGreen};
  }
  @media all and (max-width: 480px) {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0.6rem 0;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0.6rem 0;
  }
`;

const Banner = styled.div`
  padding: 4rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media all and (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 2rem 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 3rem 0;
  }
`;

const WrapperBannerText = styled.div`
  max-width: 485px;
  @media all and (max-width: 480px) {
    width: 100%;
    margin: 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    margin: 1rem;
  }
`;

const BannerText = styled.h1`
  color: ${(props) => (props.primary ? colors.primary : colors.gray)};
  font-size: 2.2rem;
  @media all and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const TextInformation = styled.p`
  color: ${colors.gray};
  margin: 0.5rem 0;
  font-size: 1.1rem;
  line-height: 28px;
  @media all and (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 23px;
  }
`;

const WrapperHamburger = styled.div`
  display: none;
  @media all and (max-width: 480px) {
    display: block;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    display: block;
  }
`;

const SectionTwo = styled.section`
  background-color: white;
  height: 675px;
  @media all and (max-width: 480px) {
    height: calc(650px * 2);
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    height: calc(650px * 2);
  }
`;

const SubTitleHeading = styled.h6`
  color: ${colors.blueLight};
  font-size: 1.2rem;
  font-weight: 600;
`;

const TitleHeading = styled.h2`
  color: ${colors.primary};
  font-size: 1.6rem;
  font-weight: 700;
`;

const ProgramHB = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BoxProgram = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 11px 10px -2px rgba(143, 143, 143, 0.23);
  -webkit-box-shadow: 0px 11px 10px -2px rgba(143, 143, 143, 0.23);
  -moz-box-shadow: 0px 11px 10px -2px rgba(143, 143, 143, 0.23);
  width: 33.33%;
  padding: 3rem 1rem;
  margin: 0 1rem;
  text-align: center;
  @media all and (max-width: 480px) {
    width: 90%;
    margin: 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 90%;
    margin: 1rem;
  }
`;

const ProgramTitle = styled.h4`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 0.8rem;
`;

const ProgramDesc = styled.p`
  color: ${colors.gray};
  font-weight: 500;
  max-width: 80%;
  font-size: 0.8rem;
  margin: auto;
  line-height: 1.5rem;
  margin-top: 1rem;
`;

const SectionThree = styled.div`
  height: 620px;
  background-color: ${colors.greenLight};
  @media all and (max-width: 480px) {
    height: calc(650px + 15rem);
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    height: calc(650px + 15rem);
  }
`;

const KamarInspirasiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const KamarInspirasiInfoWrapper = styled.div`
  width: 50%;
  max-width: 410px;
  @media all and (max-width: 480px) {
    width: 90%;
    margin: 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 90%;
    margin: 1rem;
  }
`;

const KamarInspirasiInfo = styled.p`
  color: ${colors.gray};
  font-weight: 500;
  font-size: 0.8rem;
  margin: auto;
  line-height: 1.5rem;
  margin-top: 1rem;
  text-align: justify;
`;

const KamarInspirasiEmbedVideo = styled.div`
  border-radius: 10px;
  width: 50%;
  @media all and (max-width: 480px) {
    width: 90%;
    margin: 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 90%;
    margin: 1rem;
  }
  padding: 2rem 0;
`;

const EmbedVideo = styled.iframe`
  border-radius: 20px;
  width: 560px;
  height: 315px;
  border: none;
  @media all and (max-width: 480px) {
    width: 100%;
    height: 250px;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 250px;
    margin: auto;
  }
`;

const SectionFour = styled.section`
  background-color: white;
  height: 650px;
  @media all and (max-width: 480px) {
    height: calc(650px * 2.2);
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    height: calc(650px * 2.2);
  }
`;

const FeedbackWrapper = styled.div`
  padding: 8rem 0;
`;

const FeedbackItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem 0;
  justify-content: space-between;
  @media all and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const FeedbackItem = styled.div`
  background-color: ${colors.grayLight};
  width: 25%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  @media all and (max-width: 480px) {
    width: 100%;
    margin-top: 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const FeedbackItemImage = styled.div`
  height: 250px;
  background-image: url("/images/${(props) => props.img}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const FeedbackInformationWrapper = styled.div`
  padding: 1.5rem;
  color: ${colors.primary};
`;

const FeedbackInfoTitle = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
`;

const FeedbackInfoJumlah = styled.h4`
  font-size: 2rem;
`;

const SectionFive = styled.section`
  background-color: white;
  height: 1080px;
  @media all and (max-width: 480px) {
    height: calc(650px * 3.8);
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    height: calc(650px * 3.8);
  }
`;

const NewsWrapper = styled.div`
  padding-top: 8rem;
  text-align: center;
`;

const NewsItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5rem 0;
  @media all and (max-width: 480px) {
    flex-direction: column;
    padding: 3rem 0;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 0;
  }
`;

const NewsItem = styled.div`
  width: 33.33%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 11px 10px -2px rgba(143, 143, 143, 0.23);
  -webkit-box-shadow: 0px 11px 10px -2px rgba(143, 143, 143, 0.23);
  -moz-box-shadow: 0px 11px 10px -2px rgba(143, 143, 143, 0.23);
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  @media all and (max-width: 480px) {
    width: 100%;
    margin: 1rem 0;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const NewsItemImage = styled.div`
  height: 250px;
  background-image: url("/images/${(props) => props.img}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 0 0;
  cursor: pointer;
`;

const NewsItemAuthor = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  align-items: center;
`;

const NewsAuthorName = styled.p`
  color: ${colors.gray};
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${colors.gray};
  }
`;

const NewsItemTitle = styled.h6`
  color: #000;
  padding: 1rem;
  text-align: start;
  font-size: 1.3rem;
  cursor: pointer;
`;

const NewsItemDesc = styled.p`
  color: ${colors.grayLight};
  font-size: 1rem;
  text-align: start;
  padding-left: 1rem;
  line-height: 1.7rem;
  cursor: pointer;
`;

const NewsItemMoreLink = styled.p`
  color: ${colors.gray};
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  width: fit-content;
  margin-right: 1.5rem;
  margin-left: auto;
  margin-top: 0.5rem;
  &:hover {
    border-bottom: 1px solid ${colors.gray};
  }
`;

const NewsDate = styled.div`
  color: white;
  background-color: ${colors.orange};
  padding: 1rem;
  border-radius: 20px 0 0 0;
  position: absolute;
  width: 80px;
`;

const SectionSix = styled.section`
  padding: 2rem 0;
  height: 500px;
`;

const AdBanner = styled.div`
  background-color: ${colors.green};
  padding: 2rem;
  color: #ffffff;
  border-radius: 20px;
  text-align: center;
`;

const AdBannerInfoWrapper = styled.div`
  max-width: 450px;
  margin: auto;
`;

const AdBannerText = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const AdBannerHeadline = styled.h2`
  font-size: 2rem;
`;

const FormAd = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputNoRounded = styled.input`
  background-color: #26828e;
  color: white;
  font-weight: 800;
  border: none;
  padding: 1rem;
  width: 70%;
  @media all and (max-width: 480px) {
    width: 100%;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`;

const ButtonWhite = styled.a`
  padding: 1rem 2rem;
  width: 30%;
  background-color: #ffffff;
  color: ${colors.green};
  font-weight: 800;
  border-radius: 5px;
  margin: 0 1rem;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${colors.greenLight};
  }
  @media all and (max-width: 480px) {
    width: 80%;
    margin: 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 80%;
    margin: 1rem;
  }
`;

const Footer = styled.footer`
  height: 400px;
`;
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
  }
`;
const FooterSec1 = styled.div`
  width: 25%;
  @media all and (max-width: 480px) {
    width: 100%;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
  }
`;

const FooterSec2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: space-around;
  margin: 1rem 4rem;
  @media all and (max-width: 480px) {
    flex-direction: column;
    margin: 1rem 0;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
    margin: 1rem 0;
  }
`;

const MenuFooter = styled.ul`
  list-style: none;
  margin-top: 1.7rem;
`;

const MenuTitle = styled.h2`
  color: ${colors.primary};
  font-weight: 800;
`;

const MenuFooterList = styled.li`
  color: ${colors.gray};
  margin: 1rem 0;
  &:hover {
    color: ${colors.grayLight};
  }
`;

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setOpen(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  let string =
    "Headline Berita : Lorem Ipsum dolor sit amet lordd dolor sit amet sit amet lordd dolor sit amet sit amet lordd dolor sit amet";
  let length = 75;
  let stringDesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat pharetra lectus, iaculis aliquet tortor. Donec pretium sapien vel orci convallis, afringilla iaculis aliquet tortor. Donec pretium sapien vel orci convallis, afringilla afringillaafringillaafringillaafringillaafringillaafringillaafringillaafringillaafringillaafringillaafringillaafringillaafringilla";
  let lengthDesc = 250;
  const trimmedString =
    string.length > length ? string.substring(0, length - 3) + "..." : string;
  const trimmedStringDesc =
    stringDesc.length > lengthDesc
      ? stringDesc.substring(0, lengthDesc - 3) + "..."
      : stringDesc;

  return (
    <>
      <SectionOne>
        <Container>
          <Menu>
            <div>
              <Link href="/">
                <a>
                  <Image
                    src="/hayuberbagi-logosmall.png"
                    width={64}
                    height={70}
                    alt="HayuBerbagi Logo"
                  />
                </a>
              </Link>
            </div>
            <div>
              <WrapperListMenu openNavs={isOpen}>
                <ListMenu>
                  <Link href="/">
                    <a>Beranda</a>
                  </Link>
                </ListMenu>
                <ListMenu>
                  <Link href="/">
                    <a>Program Kami</a>
                  </Link>
                </ListMenu>
                <ListMenu>
                  <Link href="/">
                    <a>Panti Asuhan</a>
                  </Link>
                </ListMenu>
                <ListMenu>
                  <Link href="/">
                    <a>About Us</a>
                  </Link>
                </ListMenu>
                <ListMenu>
                  <Link href="/">
                    <a>Login</a>
                  </Link>
                </ListMenu>
                <ListMenu>
                  <Link href="/s">
                    <ButtonGreen>Donasi</ButtonGreen>
                  </Link>
                </ListMenu>
              </WrapperListMenu>
              <WrapperHamburger>
                <Hamburger
                  color={colors.primary}
                  size={40}
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </WrapperHamburger>
            </div>
          </Menu>
          <Banner>
            <WrapperBannerText>
              <BannerText primary>
                HayuBerbagi bertransformasi sebagai lembaga sosial edukatif.
              </BannerText>
              <TextInformation>
                Memiliki semangat untuk membuat masa depan yang lebih kaya dan
                bahagia melalui management berkualitas tinggi serta
                program-program unggul
              </TextInformation>
            </WrapperBannerText>
            <div>
              <Image
                src="/images/banner-image.png"
                width={421}
                height={360}
                alt="Banner Image HayuBerbagi"
              />
            </div>
          </Banner>
        </Container>
      </SectionOne>
      <SectionTwo>
        <Container>
          <div className={`${styles.pt5} ${styles.textCenter}`}>
            <SubTitleHeading>Program Kami</SubTitleHeading>
            <TitleHeading>Ikuti Program bersama dari HayuBerbagi</TitleHeading>
          </div>
          <ProgramHB className={`${styles.pt5} ${styles.pb5}`}>
            <BoxProgram>
              <IconBerbagiNasi />
              <ProgramTitle>Berbagi Nasi</ProgramTitle>
              <ProgramDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur consequat pharetra lectus, iaculis aliquet tortor.
                Donec pretium sapien vel orci convallis, a euismod dolor
                fringilla.{" "}
              </ProgramDesc>
            </BoxProgram>
            <BoxProgram>
              <IconKelasYatim />
              <ProgramTitle>Kelas Yatim</ProgramTitle>
              <ProgramDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur consequat pharetra lectus, iaculis aliquet tortor.
                Donec pretium sapien vel orci convallis, a euismod dolor
                fringilla.{" "}
              </ProgramDesc>
            </BoxProgram>
            <BoxProgram>
              <IconWisataYatim />
              <ProgramTitle>Wisata Yatim</ProgramTitle>
              <ProgramDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur consequat pharetra lectus, iaculis aliquet tortor.
                Donec pretium sapien vel orci convallis, a euismod dolor
                fringilla.{" "}
              </ProgramDesc>
            </BoxProgram>
          </ProgramHB>
        </Container>
      </SectionTwo>
      <SectionThree>
        <Container>
          <KamarInspirasiWrapper className={`${styles.pt5} ${styles.pb5}`}>
            <KamarInspirasiInfoWrapper className={`${styles.pt5}`}>
              <SubTitleHeading>Kamar Inspirasi</SubTitleHeading>
              <TitleHeading>
                Dukungan Untuk Anak Yatim Se-Indonesia
              </TitleHeading>
              <KamarInspirasiInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur consequat pharetra lectus, iaculis aliquet tortor.
                Donec pretium sapien vel orci convallis, a euismod dolor
                fringilla.{" "}
              </KamarInspirasiInfo>
            </KamarInspirasiInfoWrapper>
            <KamarInspirasiEmbedVideo>
              <EmbedVideo
                src="https://www.youtube.com/embed/T-xstLFaPLk?start=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </KamarInspirasiEmbedVideo>
          </KamarInspirasiWrapper>
        </Container>
      </SectionThree>
      <SectionFour>
        <Container>
          <FeedbackWrapper>
            <TitleHeading>HayuBerbagi Feedback</TitleHeading>
            <FeedbackItemWrapper>
              <FeedbackItem>
                <FeedbackItemImage img="feedback-relawan.png" />
                <FeedbackInformationWrapper>
                  <FeedbackInfoTitle>Relawan</FeedbackInfoTitle>
                  <FeedbackInfoJumlah>500</FeedbackInfoJumlah>
                </FeedbackInformationWrapper>
              </FeedbackItem>
              <FeedbackItem>
                <FeedbackItemImage img="feedback-donatur.png" />
                <FeedbackInformationWrapper>
                  <FeedbackInfoTitle>Donatur</FeedbackInfoTitle>
                  <FeedbackInfoJumlah>1.500</FeedbackInfoJumlah>
                </FeedbackInformationWrapper>
              </FeedbackItem>
              <FeedbackItem>
                <FeedbackItemImage img="feedback-penerimamanfaat.png" />
                <FeedbackInformationWrapper>
                  <FeedbackInfoTitle>Penerima Manfaat</FeedbackInfoTitle>
                  <FeedbackInfoJumlah>13.526</FeedbackInfoJumlah>
                </FeedbackInformationWrapper>
              </FeedbackItem>
            </FeedbackItemWrapper>
          </FeedbackWrapper>
        </Container>
      </SectionFour>
      <SectionFive>
        <Container>
          <NewsWrapper>
            <TitleHeading>HayuBerbagi Cerita</TitleHeading>
            <TextInformation>
              Jangan ketinggalan berita terbaru tentang HayuBerbagi dan Panti
              Asuhan!
            </TextInformation>
            <NewsItemWrapper>
              <NewsItem>
                <NewsDate>08 July</NewsDate>
                <Link href="/s">
                  <NewsItemImage img="feedback-relawan.png" />
                </Link>
                <NewsItemAuthor>
                  <IconAuthor />
                  <Link href="/author/admin">
                    <NewsAuthorName>Admin HB 1</NewsAuthorName>
                  </Link>
                </NewsItemAuthor>
                <Link href="/s">
                  <>
                    <NewsItemTitle>{trimmedString}</NewsItemTitle>
                    <NewsItemDesc>{trimmedStringDesc}</NewsItemDesc>
                  </>
                </Link>
                <Link href="/s">
                  <NewsItemMoreLink>Lihat Selengkapnya</NewsItemMoreLink>
                </Link>
              </NewsItem>
              <NewsItem>
                <NewsDate>09 July</NewsDate>
                <Link href="/s">
                  <NewsItemImage img="feedback-relawan.png" />
                </Link>
                <NewsItemAuthor>
                  <IconAuthor />
                  <Link href="/author/admin">
                    <NewsAuthorName>Admin HB 1</NewsAuthorName>
                  </Link>
                </NewsItemAuthor>
                <Link href="/s">
                  <>
                    <NewsItemTitle>{trimmedString}</NewsItemTitle>
                    <NewsItemDesc>{trimmedStringDesc}</NewsItemDesc>
                  </>
                </Link>
                <Link href="/s">
                  <NewsItemMoreLink>Lihat Selengkapnya</NewsItemMoreLink>
                </Link>
              </NewsItem>
              <NewsItem>
                <NewsDate>10 July</NewsDate>
                <Link href="/s">
                  <NewsItemImage img="feedback-relawan.png" />
                </Link>
                <NewsItemAuthor>
                  <IconAuthor />
                  <Link href="/author/admin">
                    <NewsAuthorName>Admin HB 1</NewsAuthorName>
                  </Link>
                </NewsItemAuthor>
                <Link href="/s">
                  <>
                    <NewsItemTitle>{trimmedString}</NewsItemTitle>
                    <NewsItemDesc>{trimmedStringDesc}</NewsItemDesc>
                  </>
                </Link>
                <Link href="/s">
                  <NewsItemMoreLink>Lihat Selengkapnya</NewsItemMoreLink>
                </Link>
              </NewsItem>
            </NewsItemWrapper>
            <Link href="/">
              <ButtonGreen>Lihat Semua</ButtonGreen>
            </Link>
          </NewsWrapper>
        </Container>
      </SectionFive>
      <SectionSix>
        <Container>
          <AdBanner>
            <AdBannerInfoWrapper>
              <AdBannerText>Donasi HayuBerbagi</AdBannerText>
              <AdBannerHeadline>
                Donasi Sekarang juga di platform HayuBerbagi
              </AdBannerHeadline>
              <AdBannerText>
                Masukan email untuk proses donasi anda, kolom dibawah ini
              </AdBannerText>
              <FormAd>
                <InputNoRounded placeholder="Email Anda ..." />
                <ButtonWhite>Donasi</ButtonWhite>
              </FormAd>
            </AdBannerInfoWrapper>
          </AdBanner>
        </Container>
      </SectionSix>
      <Footer>
        <Container>
          <FooterWrapper>
            <FooterSec1>
              <Image
                src="/hayuberbagi-text-logo.png"
                width={233}
                height={70}
                alt="HayuBerbagi Logo"
              />
              <TextInformation>
                HayuBerbagi adalah lorem ipsum dolor sit Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Curabitur consequat pharetra
                lectus, iaculis aliquet tortor.
              </TextInformation>
            </FooterSec1>
            <FooterSec2>
              <div>
                <MenuTitle>Program</MenuTitle>
                <MenuFooter>
                  <MenuFooterList>
                    <Link href="/">
                      <a>Berbagi Nasi</a>
                    </Link>
                  </MenuFooterList>
                  <MenuFooterList>
                    <Link href="/">
                      <a>Kelas Yatim</a>
                    </Link>
                  </MenuFooterList>
                  <MenuFooterList>
                    <Link href="/">
                      <a>Wisata Yatim</a>
                    </Link>
                  </MenuFooterList>
                </MenuFooter>
              </div>
              <div>
                <MenuTitle>Panti Asuhan</MenuTitle>
                <MenuFooter>
                  <MenuFooterList>
                    <Link href="/">
                      <a>List Panti</a>
                    </Link>
                  </MenuFooterList>
                  <MenuFooterList>
                    <Link href="/">
                      <a>Campaign Panti</a>
                    </Link>
                  </MenuFooterList>
                </MenuFooter>
              </div>
              <div>
                <MenuTitle>Donasi</MenuTitle>
                <MenuFooter>
                  <MenuFooterList>
                    <Link href="/">
                      <a>Donasi Online</a>
                    </Link>
                  </MenuFooterList>
                  <MenuFooterList>
                    <Link href="/">
                      <a>Donasi Kebutuhan</a>
                    </Link>
                  </MenuFooterList>
                </MenuFooter>
              </div>
            </FooterSec2>
          </FooterWrapper>
        </Container>
      </Footer>
    </>
  );
}
