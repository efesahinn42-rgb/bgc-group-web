import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding, text = "Teklif Al", href = "https://wa.me/908508880155" }: { padding: string, text?: string, href?: string }) => {
  const isExternal = href.startsWith('http');
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {text}
    </LinkTo>
  );
};

export default GetStartedButton;
