const data = [
  {
    id: '1',
    name: 'Kino',
    roles: ['Sprzedawca', 'Woźny', 'Widz', 'Technik', 'VIP']
  },
  {
    id: '2',
    name: 'Biurowiec',
    roles: ['Menadżer', 'Pracownik', 'Konsultant', 'Lider zespołu', 'Recepcjonista', 'Księgowy', 'Sekretarka']
  },
  {
    id: '3',
    name: 'Pub',
    roles: ['Barman', 'Ochroniarz', 'Menel', 'Klient', 'Labadziara']
  },
  {
    id: '4',
    name: 'Polarna Stacja Badawcza',
    roles: ['Pilot Helikoptera', 'Naukowiec', 'Dowódca', 'Lekarz', 'Radiolog']
  },
  {
    id: '5',
    name: 'Szpital',
    roles: ['Doktor', 'Pielęgniarka', 'Chory', 'Odwiedzający', 'Hipochondryk', 'Chirurg', 'Kierowca karetki', 'Operowany']
  },
  {
    id: '6',
    name: 'Komisariat',
    roles: ['Oficer policji', 'Komisarz', 'Prawilna mordeczka', 'Dziennikarz', 'Małe dziecko']
  },
  {
    id: '7',
    name: 'Szkoła',
    roles: ['Nauczyciel', 'Dyrektor', 'Uczeń', 'Pedofil', 'Woźny', 'Wuefista', 'Katechetka']
  },
  {
    id: '8',
    name: 'Schronisko dla zwierząt',
    roles: ['Wolontariusz', 'Zoofil', 'Hycel', 'Dyrektor', 'Człowiek chcący przygarnąć psa']
  },
  {
    id: '9',
    name: 'Sklep monopolowy',
    roles: ['Ekspedientka', 'Dostawca', 'Klient', 'Menel', 'Złodziej']
  },
  {
    id: '10',
    name: 'Muzeum',
    roles: ['Ochroniarz', 'Kustosz', 'Zwiedzający', 'Fanatyk malarstwa', 'Złodziej']
  },
  {
    id: '11',
    name: 'Pociąg',
    roles: ['Kanar', 'Menel', 'Człowiek bez biletu', 'Maszynista', 'Pasażer']
  },
  {
    id: '12',
    name: 'Cmentarz',
    roles: ['Grabarz', 'Martwy/Pochowany', 'Odwiedzający', 'Ksiądz', 'Zombie']
  },
  {
    id: '13',
    name: 'Uczelnia Wyższa',
    roles: ['Student', 'Profesor', 'Rektor', 'Ochroniarz', '*Wieczny* student']
  },
  {
    id: '14',
    name: 'Lotnisko',
    roles: ['Przemytnik', 'Policjant', 'Podróżnik', 'Pilot', 'Stewardesa']
  },
  {
    id: '15',
    name: 'Metro',
    roles: ['Menel', 'Pasażer', 'Strażnik miejski', 'Kanar', 'Matka z dzieckiem']
  },
  {
    id: '16',
    name: 'Więzienie',
    roles: ['Strażnik więzienny', 'Więzień za morderstwo', 'Prawilna morda', 'Więzień za gwałt', 'Naczelnik']
  },
  {
    id: '17',
    name: 'Sąd',
    roles: ['Sędzia', 'Prokurator', 'Oskarżony', 'Adwokat', 'Dziennikarz', 'Przysięgly', 'Oficer policji']
  },
  {
    id: '18',
    name: 'Farma',
    roles: ['Rolnik', 'Zarządca', 'Żona zarządcy', 'Złodziej zboża', 'Piwowar']
  },
  {
    id: '19',
    name: 'Statek piracki',
    roles: ['Kapitan', 'Kucharz', 'Niewolnik', 'Pasażer', 'Bosman', 'Kanonier', 'Pierwszy oficer']
  },
  {
    id: '20',
    name: 'Zamek królewski',
    roles: ['Król', 'Królowa', 'Książe', 'Rycerz', 'Dworzanin', 'Biskup', 'Sługa']
  },
  {
    id: '21',
    name: 'Katedra',
    roles: ['Wierzący', 'Ministrant', 'Biskup', 'Ksiądz', 'Katecheta', 'Moher']
  },
  {
    id: '22',
    name: 'Stacja kosmiczna',
    roles: ['Astronauta', 'Obcy', 'Mechanik', 'Turysta', 'Operator łączności', 'Naukowiec']
  },
  {
    id: '23',
    name: 'Blok mieszkalny',
    roles: ['Imprezowicz', 'Szary człowiek', 'Wiercący sąsiad', 'Głośne dziecko', 'Miły człowiek', 'Pijak']
  },
  {
    id: '24',
    name: 'Warsztat samochodowy',
    roles: ['Mechanik', 'Klient', 'Janusz biznesu', 'Pomocnik mechanika', 'Serwisant', 'Elektromechanik']
  },
  {
    id: '25',
    name: 'Siedziba firmy IT',
    roles: ['Grafik', 'Programista', 'Menadżer projektu', 'księgowa', 'PR-owiec', 'Tester aplikacji']
  },
  {
    id: '26',
    name: 'Laboratorium',
    roles: ['Naukowiec', 'Chemik', 'Fizyk', 'Laborant', 'Biolog', 'Astrolog', 'Geograf']
  },
  {
    id: '27',
    name: 'Apteka',
    roles: ['Dostawca', 'Lekarz', 'Farmaceuta', 'Klient', 'Starsza pani', 'Dietetyk', 'Pan z psem']
  },
  {
    id: '28',
    name: 'Psychiatryk',
    roles: ['Psycholog', 'Ochroniarz', 'Pacjent', 'Człowiek niespełna rozumu', 'Pedagog', 'Pielęgniarka', 'Terapeuta', 'Osoba z depresją']
  },
  {
    id: '29',
    name: 'Stadion narodowy',
    roles: ['Trener', 'Kibic', 'Kibol', 'Sędzia', 'Osoba wbiegająca na murawę', 'Zawodnik', 'Bramkarz', 'Kamerzysta', 'Ochroniarz']
  },
  {
    id: '30',
    name: 'Granica państwa',
    roles: ['Pies służbowy', 'Przemytnik', 'Turysta', 'Celnik', 'Osoba w bagażniku', 'Nielegalny imigrant']
  },
  {
    id: '31',
    name: 'Baza wojskowa',
    roles: ['Kapral', 'Żołnierz', 'Porucznik', 'Cywil', 'Pułkownik', 'Tłumacz']
  },
  {
    id: '32',
    name: 'Poczta',
    roles: ['Kurier', 'Ekspedientka', 'Nadawca paczki', 'Starsza pani', 'Magazynier', 'Matka rozwydrzonego dziecka']
  },
  {
    id: '33',
    name: 'Rajska wyspa',
    roles: ['Właściciel kurortu', 'Turysta', 'Tubylec', 'Łowca wielorybów', 'Rozbitek', 'Nurek', 'Fotograf']
  },
  {
    id: '34',
    name: 'Samolot',
    roles: ['Pilot', 'Mechanik', 'Pasażer', 'Hostessa', 'Pasażer na gapę', 'Kontroler ruchu', 'Celebryta']
  },
  {
    id: '35',
    name: 'Cyrk',
    roles: ['Klaun', 'Treser zwierząt', 'Magik', 'Widz', 'Akrobata', 'Baba z brodą', 'Kuglarz']
  },
  {
    id: '36',
    name: 'Kasyno',
    roles: ['Hazardzista', 'Ochroniarz', 'Krupier', 'Hostessa', 'Uzależniony od gry', 'Gangster', 'Szuler']
  },
  {
    id: '37',
    name: 'Studio filmowe',
    roles: ['Scenarzysta', 'Reżyser', 'Aktor', 'Kamerzysta', 'Dubler', 'Operator dźwięku', 'Osoba robiąca sztuczny tłum', 'Gwiazda kina']
  },
  {
    id: '38',
    name: 'Pustynia',
    roles: ['Zagubiony', 'Osoba na wielbłądzie', 'Turysta', 'Prawie trup', 'Właściciel oazy', 'Turysta', 'Uciekinier']
  },
  {
    id: '39',
    name: 'Jaskinia',
    roles: ['Archeolog', 'Naukowiec', 'Zagubiony', 'Turysta', 'Badacz']
  },
  {
    id: '40',
    name: 'Pociąg',
    roles: ['Pasażer', 'Konduktor', 'Menel', 'Mechanik', 'Maszynista', 'Osoba chowająca się w ubikacji', 'Pasażer na gapę', 'Turysta']
  },
  {
    id: '41',
    name: 'Hotel',
    roles: ['Recepcjonistka', 'Turysta', 'Klient służbowy', 'Kucharz', 'Kelner', 'Kamerdyner', 'Sprzątaczka', 'Kosmetyczka', 'Bogaty klient']
  },
  {
    id: '42',
    name: 'Pustynia',
    roles: ['Zagubiony', 'Osoba na wielbłądzie', 'Turysta', 'Prawie trup', 'Właściciel oazy', 'Turysta', 'Uciekinier']
  },
  {
    id: '43',
    name: 'You are',
    roles: ['Spy']
  },
  {
    id: '44',
    name: 'Klub nocny',
    roles: ['Tancerka go-go', 'VIP', 'DJ', 'Pijany człowiek', 'Barman', 'Ochroniarz', 'Bramkarz', 'Zdradzający facet', 'Kawaler']
  },
  {
    id: '45',
    name: 'Zoo',
    roles: ['Treser zwierząt', 'Zwiedzający', 'Fotograf', 'Dziecko na wycieczce', 'Sprzątacz', 'Przewodnik']
  },
  {
    id: '46',
    name: 'Łódź podwodna',
    roles: ['Kapitan', 'Żołnierz', 'Mechanik', 'Operator działa', 'Operator lunety', 'Operator sonaru', 'Sternik', 'Lekarz', 'Kucharz']
  },
  {
    id: '47',
    name: 'Kopalnia',
    roles: ['Górnik', 'Operator maszyn', 'Nadzorujący bezpieczeństwo', 'Inspektor', 'Kopacz']
  },
  {
    id: '48',
    name: 'Pole golfowe',
    roles: ['Gracz', 'Widz', 'Profesjonalista', 'Projektant', 'Szofer']
  },
  {
    id: '49',
    name: 'Sklep z ubraniami',
    roles: ['Menadżer', 'Klient', 'Manekin', 'Złodziej', 'Ekspedientka', 'Projektant mody']
  },
  {
    id: '50',
    name: 'Ruchliwa ulica',
    roles: ['Pieszy', 'Kierowca', 'Jehowy', 'Zagubione dziecko', 'Robotnik budowy', 'Żebrak', 'Wściekły kierowca', 'Rowerzysta', 'Rozdający ulotki']
  },
  {
    id: '51',
    name: 'Sklep jubilerski',
    roles: ['Klient', 'Jubiler', 'Złotnik', 'Złodziej', 'Znawca biżuterii']
  },
]

export default data