import { Antagonist, Category } from '../base';

const Abductor: Antagonist = {
  key: 'abductor',
  name: 'Абдуктор',
  description: [
    `
      Абдукторы - технологически развитое инопланетное общество, поставившее
      своей целью каталогизацию всех видов в системе. К несчастью для своих
      испытуемых, их методы весьма инвазивны.
    `,

    `
    Вы и ваш напарник станете дуэтом абдукторов из учёного и агента.
    В качестве агента похищайте ничего не подозревающих жертв и возвращайте их
    в свой НЛО. В качестве учёного ищите жертв для своего агента, обеспечивайте
    его безопасность и оперируйте тех, кого он принесёт.
    `,
  ],
  category: Category.Midround,
};

export default Abductor;
