import { Antagonist, Category } from '../base';

const Cultist: Antagonist = {
  key: 'cultist',
  name: 'Культист',
  description: [
    `
      Богиня Крови, Нар-Си, отправила несколько своих последователей на
      космическую станцию 13. Как культист, вы имеете в своем распоряжении
      множество заклинаний культа, подходящих для любых ситуаций. Вы должны работать
      вместе со своими собратьями, чтобы призвать аватар вашей мистической богини!
    `,

    `
      Вооружившись магией крови, обратите членов экипажа в Культ крови,
      принесите в жертву мешающим вам, и призовите Нар-Си.
    `,
  ],
  category: Category.Roundstart,
};

export default Cultist;
