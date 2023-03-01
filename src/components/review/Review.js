import React, { useEffect, useState } from "react";
import { Similar } from "../SimilarItems/Similar";
import styles from "./review.module.scss";

function Review({ articles }) {
  let [comments, setcomments] = useState({});
  let [allcomments, setAllcomments] = useState([]);
  let [reviews, setreviews] = useState();
  let [name, setname] = useState();
  let [email, setemail] = useState();
  let [rating, setrating] = useState(0);

  function RatingData(num) {
    setrating(num);
    setcomments({ ...comments,rate:num});
  }

  function catchReviews() {
    setAllcomments([...allcomments, comments]);

    setreviews("");
    setname("");

    setemail("");
  }
  useEffect(() => {
    setcomments({ ...comments, name, email, reviews});
    console.log(comments);
    console.log(allcomments);
  }, [name, email, reviews]);
  return (
    <div className={styles["review"]}>
      <div className={styles["form"]}>
        <div className={styles["form__commentary"]}>
          <div className={styles["coms"]}>
            <h2>{allcomments.length} Reviews for lira earings</h2>
            {allcomments &&
              allcomments.map((coms,i) => {
                let { name, reviews, email,rate } = coms;
                return (
                  <div className={styles['coms__comment']} key={i}>
                    <p>
                      <strong>{name}</strong> {"   "}{" "}
                      {new Date().toLocaleDateString()}
                    </p>
                    <div className={styles["rating-com"]}>
                      <ul>
                        <li onClick={() => RatingData(1)}>
                          <i
                            className={`${
                              rate >= 1
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }`}
                          ></i>
                        </li>
                        <li onClick={() => RatingData(2)}>
                          <i
                            className={`${
                              rate >= 2
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }`}
                          ></i>
                        </li>
                        <li onClick={() => RatingData(3)}>
                          <i
                            className={`${
                              rate >= 3
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }`}
                          ></i>
                        </li>
                        <li onClick={() => RatingData(4)}>
                          <i
                            className={`${
                              rate >= 4
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }`}
                          ></i>
                        </li>
                        <li onClick={() => RatingData(5)}>
                          <i
                            className={`${
                              rate >= 5
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }`}
                          ></i>
                        </li>
                      </ul>
                    </div>
                    <p>{reviews}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles["form__add"]}>
          <h2>Add a review</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className={styles["add-inp"]}>
            <div>
              Your Review*
              <input onChange={(e) => setreviews(e.target.value)} value={reviews} />
            </div>
            <div>
              Enter your name*
              <input onChange={(e) => setname(e.target.value)} value={name} />
            </div>
            <div>
              Enter your Email*
              <input onChange={(e) => setemail(e.target.value)} value={email} />
            </div>
          </div>

          <div className={styles["check"]}>
            <input type={"checkbox"} />
            <p>
              Save my name, email, and website in this browser for the next time
              I comment
            </p>
          </div>

          <div className={styles["rating"]}>
            <p>Your Rating*</p>

            <ul>
              <li onClick={() => RatingData(1)}>
                <i
                  className={`${
                    rating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"
                  }`}
                ></i>
              </li>
              <li onClick={() => RatingData(2)}>
                <i
                  className={`${
                    rating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"
                  }`}
                ></i>
              </li>
              <li onClick={() => RatingData(3)}>
                <i
                  className={`${
                    rating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"
                  }`}
                ></i>
              </li>
              <li onClick={() => RatingData(4)}>
                <i
                  className={`${
                    rating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"
                  }`}
                ></i>
              </li>
              <li onClick={() => RatingData(5)}>
                <i
                  className={`${
                    rating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"
                  }`}
                ></i>
              </li>
            </ul>
          </div>

          <button onClick={catchReviews} className={styles["btn"]}>
            Submit
          </button>
        </div>
      </div>
      <div className={styles['products']}>
        <h2>Similar Items</h2>
       <Similar articles={articles} />
      </div>
    </div>
  );
}

export default Review;
