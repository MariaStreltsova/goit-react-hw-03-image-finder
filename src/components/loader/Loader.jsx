import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
export default function Spiner() {
  return (
    <LoaderContainer>
      <TailSpin color="#3f51b5" height={200} width={200} timeout={30000} />
    </LoaderContainer>
  );
}
