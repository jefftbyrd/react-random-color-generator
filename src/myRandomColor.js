export default function myRandomColor() {
  const color = randomColor();

  return (
    <p>{color} 123</p>

    // const hue = process.argv[2];
    // const luminosity = process.argv[3];

    // const color = randomColor({
    //   luminosity: luminosity,
    //   hue: hue,
    // });

    // let color = randomColor();

    // console.log(chalk.hex(color).bold('###############################'));
    // console.log(chalk.hex(color).bold('###############################'));
    // console.log(chalk.hex(color).bold('###############################'));
    // console.log(chalk.hex(color).bold('######                   ######'));
    // console.log(chalk.hex(color).bold(`######      ${color}      ######`));
    // console.log(chalk.hex(color).bold('######                   ######'));
    // console.log(chalk.hex(color).bold('###############################'));
    // console.log(chalk.hex(color).bold('###############################'));
    // console.log(chalk.hex(color).bold('###############################'));
  );
}
