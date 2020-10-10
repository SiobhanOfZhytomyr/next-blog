import Link from 'next/link';
import { Nav, NavbarContainer, NavLinks } from './Navbar.elements';

export function Navbar(): JSX.Element {
    return (
        <Nav>
            <NavbarContainer>
                <Link href="/">
                    <NavLinks>Home</NavLinks>
                </Link>
                <Link href="/posts/new">
                    <NavLinks>Create new post</NavLinks>
                </Link>
            </NavbarContainer>
        </Nav>
    );
}
