import React from "react";

export function Subscribe({
  firstname,
  setfirst,
  lastname,
  setlast,
  email,
  setmail,
  password,
  setpass,
  catchUsers,
  styles,
  SignInspan,
}) {
  return (
    <>
      {" "}
      <h1>
        Subscribe To <span className={styles["color"]}>SHOOPE</span> !!
      </h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className={styles["input_field"]}>
        <input
          type="text"
          placeholder="FISRTNAME"
          value={firstname}
          onChange={(e) => setfirst(e.target.value)}
          className={styles["inp_style"]}
        />
        <input
          type="text"
          placeholder="LASTNAME"
          value={lastname}
          onChange={(e) => setlast(e.target.value)}
          className={styles["inp_style"]}
        />
        <input
          type="text"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setmail(e.target.value)}
          className={styles["inp_style"]}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setpass(e.target.value)}
          className={styles["inp_style"]}
        />
      </div>
      <button className={styles["btn"]} onClick={catchUsers}>
        SUBMIT
      </button>
      <p className={styles["sign-in"]}>
        You already have an account{" "}
        <span onClick={() => SignInspan(true)}>sign in</span>
      </p>
    </>
  );
}
