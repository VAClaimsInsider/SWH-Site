import { useRouter } from "next/router";
import Link from "next/link";

interface TLink {
  name: string,
  path: string,
}

const MenuItem = ({ link }: { link: TLink }) => {
  const router = useRouter();
  const isCurrent = router.pathname === link.path;
  return isCurrent ?
    <span>{link.name}</span>
    : <Link href={link.path}>{link.name}</Link>
};

export default function Menu({ links }: { links: TLink[] }) {
  return (
    <nav>
      {links.map((link: TLink, index: number) => {
        return <MenuItem key={index} link={link} />;
      })}
    </nav>
  )
}
