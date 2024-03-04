import logo from "../../pictures/discount.png";

export default function Discount() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "476px", backgroundColor: "#339933", paddingLeft: "2%", paddingRight: "2%", paddingBottom: "2%", marginBottom: "2%" }}>
            <img src={logo} alt={"discount img"} style={{ alignSelf: "center", justifySelf: "center" }} />
            <div style={{ display: "grid", gridTemplateRows: "200px 200px", alignSelf: "center", justifySelf: "center" }}>
                <div style={{ alignSelf: "center" }}>
                    <h1 style={{ fontSize: "90px", color: "white", fontFamily: "sans-serif" }}>5% off</h1>
                    <p style={{ fontSize: "72px", color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>on the first order</p>
                </div>
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", alignItems: "center" }}>
                    {/* Улучшенный стиль для input */}
                    <input
                        type="tel" // Указываем тип для ввода телефонного номера
                        placeholder={"+43"}
                        style={{
                            height: "40px",
                            padding: "20px",
                            fontSize: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            marginRight: "10px",
                            color: "black",
                        }}
                    />
                    {/* Добавлены стили для кнопки */}
                    <button
                        style={{
                            textAlign: "left",
                            fontSize: "28px",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "#ffcc00", // Цвет фона кнопки
                            border: "none", // Убираем границу
                            padding: "10px 20px", // Отступы внутри кнопки
                            borderRadius: "5px", // Скругленные углы
                            cursor: "pointer", // Изменяем курсор при наведении
                        }}
                    >
                        Get a discount
                    </button>
                </div>
            </div>
        </div>
    );
};
