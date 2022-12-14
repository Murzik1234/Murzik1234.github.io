import React from "react";
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap'
import {useTranslation} from "react-i18next";
import "../i18n";
import Writer_DATA from '../writers.json';


export default function Header(){

    const chooseWriter = (name) => {
        const lang = i18n.language
        const listOfWriters  = Writer_DATA;
        const writer = listOfWriters.find((item, index) => {
            if(item[lang].title===name) return item
        })
        window.open('/writer/'+writer.writer, '_self', 'noopener,noreferrer');
    }
    const {t, i18n} = useTranslation();
        const listOfWriters  = Writer_DATA;
        const lang = i18n.language
        return(
            <>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">{t('W')}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">{t('H')}</Nav.Link>
                                <Nav.Link href="/writers">{t('Wr')}</Nav.Link>

                            </Nav>
                            <Button onClick={()=>{i18n.changeLanguage('ru');}} variant="outline-success">Ru</Button>

                            <Button onClick={()=>{i18n.changeLanguage('en');}}  variant="outline-success">En</Button>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder={t('search1')}
                                    className="me-1"
                                    aria-label="Search"
                                    list="writersList"
                                    id = "searchBox"
                                />
                                <datalist id = "writersList">
                                    {listOfWriters.map((writer, index) => {
                                        return (
                                            <option>{writer[lang].title}</option>
                                        )
                                    })}
                                </datalist>
                                <Button onClick = {() => chooseWriter(document.getElementById('searchBox').value)} variant="outline-success">{t('search')}</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
