import React from "react";
import PropTypes from "prop-types";
import s from "./Statistic.module.css";
import getRandomColor from "../../js/getRandomColor";

export default function Statistic({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 class={s.title}>{title}</h2> : ""}
      <ul class={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              class={s.item}
              style={{
                backgroundColor: getRandomColor(),
              }}
              key={id}
            >
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
