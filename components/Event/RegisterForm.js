import { useState } from "react";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 에러 메시지 초기화
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!formData.phone.trim()) newErrors.phone = "전화번호를 입력해주세요.";
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("사전예약 데이터:", formData);
    alert("사전예약이 완료되었습니다!");
  };

  return (
    <div className={styles.registerContainer}>
      <img
        src="./cars/chatgpt_05.png"
        alt="신차 이미지"
        className="register-image"
      />
      <h1 className={styles.registerTitle}>신차 사전예약 이벤트</h1>
      <p className={styles.registerDescription}>
        지금 사전예약하면 추첨을 통해 최신 스마트워치를 드립니다!
        <br />
        빠른 시승 예약과 혜택도 함께 누려보세요.
      </p>

      <form onSubmit={handleSubmit} className={styles.registerForm} noValidate>
        <div>
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="전화번호"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className={styles.errorMessage}>{errors.phone}</div>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
        </div>

        <button type="submit">사전예약</button>
      </form>
    </div>
  );
}
