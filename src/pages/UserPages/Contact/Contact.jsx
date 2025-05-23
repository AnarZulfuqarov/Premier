import React, {useState, useEffect} from 'react';
import "./contact.scss";
import {RiMailOpenFill, RiWhatsappFill} from "react-icons/ri";
import {PiInstagramLogoFill} from "react-icons/pi";
import {AiFillTikTok} from "react-icons/ai";
import {FaFacebook, FaPhone} from "react-icons/fa";
import {MdLocationOn, MdWatchLater} from "react-icons/md";
import back from "../../../assets/ContactBannerRed.png";
import {useTranslation} from 'react-i18next';
import {usePostContactMutation} from "../../../services/adminApi.jsx";
import showToast from "../../../components/ToastMessage.js";
import ScrollToTop from "../../../components/ScrollToTop/index.jsx";
import {RiseLoader} from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    const {t} = useTranslation();
    const [postContact] = usePostContactMutation();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        note: "",
    });

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {...formData};

        setLoading(true);

        setTimeout(() => {
            postContact(dataToSend)
                .unwrap()
                .then(() => {
                    showToast("Əlaqə uğurlu oldu!", "success");
                    setFormData({
                        name: "",
                        surname: "",
                        email: "",
                        phoneNumber: "",
                        note: "",
                    });
                })
                .catch((error) => {
                    showToast("Əlaqədə xəta:", error);
                });
        }, 1500);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="contact">
            <ScrollToTop/>
            <div className="container">
                <div className="head">
                    <p>
                        {t("contact.breadcrumb", "Ana səhifə /")}{" "}
                        <span>{t("contact.pageTitle", "Əlaqə")}</span>
                    </p>
                </div>
                <div className="title">
                    <h2>{t("contact.title", "Bizimlə Əlaqə")}</h2>
                    <p>
                        {t(
                            "contact.subtitle",
                            "Səyahətinizlə bağlı suallarınız var? Elə indi bizimlə əlaqə saxlayın və xəyalınızdakı turu birlikdə gerçəkləşdirək"
                        )}
                    </p>
                </div>
                <div className="row gy-5">
                    <div className="col-lg-6 col-md-6" data-aos="fade-up">
                        <div className="form">
                            <h2>{t("contact.formTitle", "Formanı dolduraraq bizimlə əlaqə saxlayın")}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>{t("contact.firstNameLabel", "Adınız")}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t("contact.firstNamePlaceholder", "Ad")}
                                            required
                                            onChange={handleChange}
                                            value={formData.name}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>{t("contact.lastNameLabel", "Soyadınız")}</label>
                                        <input
                                            type="text"
                                            name="surname"
                                            placeholder={t("contact.lastNamePlaceholder", "Soyad")}
                                            required
                                            onChange={handleChange}
                                            value={formData.surname}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label>{t("contact.emailLabel", "Email")}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={t("contact.emailPlaceholder", "premiertour@gmail.com")}
                                            required
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label>{t("contact.phoneLabel", "Telefon Nömrəsi")}</label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder={t("contact.phonePlaceholder", "+994 99 999 99 99")}
                                            required
                                            onChange={handleChange}
                                            value={formData.phoneNumber}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label>{t("contact.messageLabel", "Qeyd")}</label>
                                        <textarea
                                            rows="5"
                                            required
                                            value={formData.note}
                                            name="note"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" disabled={loading}>
                                    {loading ? (
                                        <RiseLoader
                                            color="#fff"
                                            size={15}
                                            speedMultiplier={1}
                                        />
                                    ) : t("contact.submitButton", "Göndər")}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up">
                        <div className="contact-part">
                            <div className="header" data-aos="zoom-in">
                                <h5>{t("contact.socialTitle", "Sosyal Medya:")}</h5>
                                <div className="social">
                                    <a href="https://wa.me/994508961299" target="_blank"><RiWhatsappFill className="icon"/></a>
                                    <a href={"https://www.instagram.com/premiertour.az/"} target="_blank"> <PiInstagramLogoFill className={"icon"} /></a>
                                    <a href={"https://www.facebook.com/TurAzerbaijan/"} target="_blank"> <FaFacebook  className={"icon"}/></a>

                                </div>
                            </div>
                            <div className="row gy-4">
                                <div className="col-lg-6" data-aos="fade-up">
                                    <div className="contact-card">
                                        <div className="icon blue">
                                            <MdLocationOn/>
                                        </div>
                                        <div className="content">
                                            <p>{t("contact.addressLabel", "Ünvan")}</p>
                                            <span>{t("contact.addressValue", "Bakı, Nizami küçəsi 45")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up">
                                    <div className="contact-card">
                                        <div className="icon orange">
                                            <FaPhone/>
                                        </div>
                                        <div className="content">
                                            <p>{t("contact.phoneCardLabel", "Telefon nömrəsi")}</p>
                                            <span>{t("contact.phoneCardValue", "+994 55 876 44 55")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up">
                                    <div className="contact-card">
                                        <div className="icon green">
                                            <RiMailOpenFill/>
                                        </div>
                                        <div className="content">
                                            <p>{t("contact.emailCardLabel", "E-mail")}</p>
                                            <span>{t("contact.emailCardValue", "premiertour@gmail.com")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up">
                                    <div className="contact-card">
                                        <div className="icon purple">
                                            <MdWatchLater/>
                                        </div>
                                        <div className="content">
                                            <p>{t("contact.hoursLabel", "İş saatı")}</p>
                                            <span>{t("contact.hoursValue", "10:00 - 20:00")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="map" data-aos="fade-up">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1223320125227!2d49.870123675826804!3d40.40614067144131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4dbe0d1d61%3A0xc059fa4b6641d0cd!2sPremier%20Tour!5e0!3m2!1saz!2saz!4v1741175929226!5m2!1saz!2saz"
                                    width="100%"
                                    height="475"
                                    style={{border: 0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={back} alt="" className="back"/>
        </div>
    );
}

export default Contact;
