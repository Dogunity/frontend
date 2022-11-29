import { Tabs, Tab } from '@mui/material';
import { PAGEVALUE } from '../../pages/MyPage';
interface TabPanelProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<PAGEVALUE>>;
}

export default function TabPanel({ value, setValue }: TabPanelProps) {
  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: React.SetStateAction<PAGEVALUE>,
  ) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab value={PAGEVALUE.PROFILE} label="프로필" />
      <Tab value={PAGEVALUE.RESULT} label="DNA결과" />
      <Tab value={PAGEVALUE.COMMUNITY} label="커뮤니티" />
      <Tab value={PAGEVALUE.MYCOMMUNITY} label="내가 만든 커뮤니티" />
    </Tabs>
  );
}
