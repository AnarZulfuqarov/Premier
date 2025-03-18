import React from 'react';
import image from "../../../assets/Rectangle 39858.png";
import { LuIdCard, LuTicketPercent } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import './services.scss';
import { IoBusSharp } from "react-icons/io5";
import { useTranslation, Trans } from 'react-i18next';

function Services() {
    const { t } = useTranslation();

    return (
        <div className={"services"}>
            <div className={"banner"}>
                <div className={"container"}>
                    <div className={"head"}>
                        <p>
                            {t("services.breadcrumb", "Ana səhifə /")}{" "}
                            <span>{t("services.pageTitle", "Xidmətlərimiz")}</span>
                        </p>
                    </div>
                    <div className={"title"}>
                        <h2>{t("services.mainTitle", "Xidmətlərimiz")}</h2>
                        <p>{t("services.subtitle", "Rahat və unudulmaz səyahət üçün peşəkar xidmətlər")}</p>
                    </div>
                </div>
                <img src={image} alt='' className={"servis-banner-image"} />
            </div>
            <div className={"container"}>
                <div className={"services-card"}>
                    <div className={"row "} style={{ marginBottom: "90px", rowGap: "200px" }}>
                        <div className={"col-lg-4"}>
                            <div className={"servis-card"}>
                                <div className={"servis-card-icon"}>
                                    <LuTicketPercent />
                                </div>
                                <h5>{t("services.card1.title", "Aviabilet satışı")}</h5>
                                <p>{t("services.card1.description", "Dünyanın aparıcı aviaşirkətləri ilə birbaşa əməkdaşlıq.")}</p>
                                <button><a href="#1"><GoArrowRight className={"icon"} /></a></button>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"servis-card"}>
                                <div className={"servis-card-icon"}>
                                    <LuIdCard />
                                </div>
                                <h5>{t("services.card2.title", "Viza dəstəyi")}</h5>
                                <p>{t("services.card2.description", "Viza üçün müraciət edən şəxslərə hərtərəfli dəstək təklif edirik.")}</p>
                                <button><a href="#2"><GoArrowRight className={"icon"} /></a></button>
                            </div>
                        </div>
                        <div className={"col-lg-4"}>
                            <div className={"servis-card"}>
                                <div className={"servis-card-icon"}>
                                    <IoBusSharp />
                                </div>
                                <h5>{t("services.card3.title", "Transfer xidmətləri")}</h5>
                                <p>{t("services.card3.description", "Lüks və komfortlu nəqliyyat vasitələri ilə yüksək səviyyəli transfer.")}</p>
                                <button><a href="#3"><GoArrowRight className={"icon"} /></a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"services-more"}>
                    <h3 id={"1"}>
                        {t("services.more.section1.title", "1. Premier Tur Aviabilet Satışı – Etibarlı və Sürətli Xidmət!")}
                    </h3>
                    <p>
                        {t(
                            "services.more.section1.description",
                            "Premier Tur olaraq, Beynəlxalq Hava Nəqliyyatı Assosiasiyasının (IATA) akkreditasiyasına sahibik və dünyanın aparıcı aviaşirkətləri ilə birbaşa əməkdaşlıq edirik. Bu, müştərilərimizə ən sərfəli qiymətlərlə, təhlükəsiz və etibarlı aviabilet xidmətləri təqdim etməyimizə imkan yaradır.\n✅ Rezervasiya və bilet satışı üçün rəsmi agentlik statusu\n✅ Dünyanın istənilən nöqtəsinə operativ və sərfəli aviabilet seçimləri\n✅ Qatar Airways, Türk Hava Yolları, Emirates, Lufthansa, British Airways, FlyDubai və digər aparıcı aviaşirkətlərlə əməkdaşlıq\n📍 Rahat və sərfəli səyahət üçün aviabiletinizi bizimlə sifariş edin! 🌍🎟️"
                        )}
                    </p>
                    <h3 id={"2"}>
                        {t("services.more.section2.title", "2. Premier Tur Aviabilet Satışı – Etibarlı və Sürətli Xidmət!")}
                    </h3>
                    <p>
                        <Trans i18nKey="services.more.section2.description">
                            Səyahət etmək üçün lazım olan viza üçün müraciət edən şəxslərə hərtərəfli dəstək təklif edirik. Xidmətlərimiz aşağıdakılardan ibarətdir:
                            <br /><strong>Viza Müraciətinin Hazırlanması:</strong> Səyahət planınıza uyğun olaraq viza üçün bütün sənədləri hazırlamağa kömək edirik. Bu, viza müraciət formasının doldurulmasından tutmuş, lazımi əlavə sənədlərin, məsələn, maliyyə və səyahət sığortası sənədlərinin hazırlanmasına qədər hər şeyi əhatə edir.
                            <br /><strong>Viza Tipinin Seçilməsi:</strong> Hansı viza növü ilə müraciət etməli olduğunuzu müəyyənləşdirməyə kömək edirik – turizm, iş, təhsil və ya digər xüsusi vizalar.
                            <br /><strong>Viza İcazələri ilə Əlaqədar Dəstək:</strong> Müraciətinizin vəziyyətini izləmək, viza icazələrinizin alınması və hər hansı bir problem yaranarsa, onu həll etmək üçün sizə dəstək veririk.
                            <br /><strong>Konsulluq və Səfirliklə Əlaqə:</strong> Konsulluq və ya səfirliklə əlaqə qurmağa kömək edirik, randevu alırıq və viza müraciətiniz üçün lazım olan məlumatları təmin edirik.
                            <br /><strong>Viza Müsahibəsi Hazırlığı:</strong> Əgər viza üçün müsahibə tələb olunursa, müsahibəyə necə hazırlıq görməyiniz və qarşılaşacağınız suallara necə cavab verməyiniz barədə sizi məlumatlandırırıq.
                        </Trans>
                    </p>
                    <h3 id={'3'}>
                        {t("services.more.section3.title", "3. Transfer Xidmətləri – Rahat və Təhlükəsiz Səfərlər!")}
                    </h3>
                    <p>
                        {t(
                            "services.more.section3.description",
                            "Premier Tur olaraq, lüks və komfortlu nəqliyyat vasitələri ilə yüksək səviyyəli transfer xidməti təqdim edirik. Sizin rahatlığınız və təhlükəsizliyiniz bizim üçün prioritetdir!\n✅ Təhlükəsiz və peşəkar sürücülər\n✅ Komfortlu avtomobillər, mikroavtobuslar və avtobuslar\n✅ Türk, ingilis və rus dillərində danışan sürücülər\n✅ Hava limanlarında VIP qarşılama və müşayiət\n✈️ Dünya Aviaşirkətləri Xidmətinizdədir!\nPremier Tur qlobal hava yolları şəbəkəsinə çıxış təmin edərək, sizə dünyanın istənilən nöqtəsinə rahat və sərfəli uçuş imkanı yaradır.\n📍 Səyahətinizin hər anında bizimlə güvəndə olun! 🌍"
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
