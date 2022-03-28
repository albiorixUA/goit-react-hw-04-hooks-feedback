import Item from './Statistics.styled';
import propTypes from 'prop-types';

const Statisctics = ({ options, total, positivePercentage }) => (
  <ul>
    {options.map(el => (
      <Item key={el}>
        {el[0]}:{el[1]}
      </Item>
    ))}
    <Item>Total:{total}</Item>
    <Item>Positive feedback :{positivePercentage}</Item>
  </ul>
);

Statisctics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.string,
};

export default Statisctics;
