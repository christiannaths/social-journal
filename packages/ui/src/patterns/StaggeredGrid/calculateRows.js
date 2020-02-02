const calculateRows = (props) => {
  const { n } = props;
  const row = Math.ceil(n / 2);
  const rowCount = Math.ceil((row / 3) * 28);

  return rowCount;
};

export default calculateRows;
