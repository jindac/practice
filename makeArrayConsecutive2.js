function makeArrayConsecutive2(statues) {
  if (statues.length === 1) {
    return 0;
  }
  var highest = 0;
  var lowest = 20;
  statues.forEach((height) => {
    if (height < lowest) {
      lowest = height;
    }
    if (height > highest) {
      highest = height;
    }
  });
  return (highest - lowest + 1) - statues.length;
}