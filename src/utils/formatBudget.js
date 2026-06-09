function formatBudet(bud) {
  if (bud >= 1000) {
    return (bud / 1000).toFixed(bud % 1000 === 0 ? 0 : 1) + 'K';
  }
  return bud;
}

export default formatBudet;