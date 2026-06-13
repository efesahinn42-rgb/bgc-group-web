import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding, text = "Teklif Al", href = "/" }: { padding: string, text?: string, href?: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={href}
    >
      {text}
    </LinkTo>
  );
};

export default GetStartedButton;
