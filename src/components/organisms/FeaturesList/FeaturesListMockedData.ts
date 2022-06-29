import Icon1 from 'assets/svg/features/star.react.svg';
import Icon2 from 'assets/svg/features/daimond.react.svg';
import Icon3 from 'assets/svg/features/person.react.svg';
import Icon4 from 'assets/svg/features/car.react.svg';
import Icon5 from 'assets/svg/features/calendar.react.svg';
import Icon6 from 'assets/svg/features/rocket.react.svg';

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type FeaturesDataType = FeatureItem[];

export const featuresData: FeaturesDataType = [
  {
    id: '0',
    title: 'Gwarancja najlepszej ceny',
    description:
      'Wyjątkowo atrakcyjne ceny. Daj się zaskoczyć ofertą przygotowaną specjalnie dla Ciebie!',
    icon: Icon1,
  },
  {
    id: '1',
    title: 'Brak limitów',
    description:
      'Jeśli potrzebujesz większy limit kilometrów przygotujemy ofertę NO LIMIT specjalnie dla Ciebie!',
    icon: Icon2,
  },
  {
    id: '2',
    title: 'Osobisty kierowca',
    description:
      'Elegancki kierowca wraz z limuzyną z najwyższej półki, zostanie Twoim kompanem w podróży.',
    icon: Icon3,
  },
  {
    id: '3',
    title: 'Najlepsze samochody',
    description:
      'Nasza flota jest zawsze w idealnym stanie technicznym, umyta, zatankowana i przygotowana do jazdy.',
    icon: Icon4,
  },
  {
    id: '4',
    title: 'Rezerwacje 24h/7',
    description:
      'Nasz zespół jest w ciągłej gotowości, aby Ci pomóc. Jesteśmy dostępni praktycznie 7 dni w tygodniu, 24h na dobę.',
    icon: Icon5,
  },
  {
    id: '5',
    title: 'Dostawa w calej Polsce',
    description:
      'Nasz samochód przyjedzie do Ciebie. Oferujemy usługi podstawienia samochodu w dowolne miejsce w Polsce.',
    icon: Icon6,
  },
];
