import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Card, Badge } from 'react-bootstrap';
import { GiToken } from 'react-icons/gi';
import { MdReport } from 'react-icons/md';
import { FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';
import { GiButtonFinger } from 'react-icons/gi';

export default function Home(): JSX.Element {
  const [isShow, setShow] = useState(false);
  const handleShow = () => setShow((prev) => !prev);
  return (
    <>
      <Head>
        <title>Superbase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-info text-white py-2 px-4 fixed-top">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Image src="/sb-logo.jpg" width="70" height="70" alt="super base" />
          </div>
          <div>
            <i className="h3">SUPER BASE</i>
          </div>
          <div>
            <GiButtonFinger color="gold" size="55" onClick={handleShow} />
          </div>
        </div>
        {isShow && (
          <div className="d-flex justify-content-center">
            <div className="bg-white rounded px-1">
              <a href="https://medium.com/@superrbase">
                <FaMedium size="30" /> Medium
              </a>
            </div>
            <div className="bg-white rounded px-1">
              <a href="https://t.me/superbasemain">
                <FaTelegram size="30" /> Telegram
              </a>
            </div>
            <div className="bg-white rounded px-1">
              <a href="https://twitter.com/SuperrBase">
                <FaTwitter size="30" /> Twitter
              </a>
            </div>
          </div>
        )}
      </header>

      <main
        style={{
          backgroundColor: '#113',
          paddingTop: '4rem',
        }}
      >
        <div className="container-fluid py-5 text-white">
          <Image
            src="/sb-logo.jpg"
            width="300"
            height="150"
            sizes="100"
            alt="super base"
          />
          <div
            style={{
              backgroundImage: 'url(/eth.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="container">
              <h2 className="pt-5 display-4 text-primary">
                Introducing{' '}
                <i
                  style={{
                    color: 'crimson',
                    fontWeight: 'bold',
                  }}
                >
                  Super Base
                </i>
              </h2>
              <hr className="bg-danger" />
              <br />
              <div
                style={{
                  display: 'flex',
                  flexBasis: '100%',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <p
                  className="rounded p-3 h5"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    lineHeight: 2,
                  }}
                >
                  <b>Super Base</b> combines the rebasing concept, auto
                  liquidity generation and the big brained RFI tech by taking a
                  10% fee on every uniswap sell. That fee is broken up into 2
                  parts:
                </p>
                <ol
                  className="rounded py-5 h4"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    lineHeight: 2,
                  }}
                >
                  <li>
                    <b>Reflection</b> — 5% of the fee is distributed to every
                    wallet that holds $SBASE on a percentage basis. The more
                    $SBASE you hold the more tokens you will receive.
                  </li>
                  <br />
                  <li>
                    <b>LP Generation</b> — with remaining 5%; 2.5% of the fee
                    collected in $SBASE is sold into ETH; that ETH is married up
                    with the remaining 2.5% of $SBASE and deposited back into
                    the uniswap liquidity pool.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="my-5 bg-white p-5">
            <h2 className="text-center my-5 text-dark">
              <Image
                src="/uniswap-logo.png"
                width="32"
                height="32"
                alt="uniswap logo"
              />{' '}
              uniswap 10% Fee Breakdown
            </h2>
            <div
              style={{
                width: 300,
                margin: '0 auto',
              }}
            >
              <Image
                src="/uniswap-fee.png"
                width="320"
                height="320"
                sizes="100"
                alt="chart"
              />
            </div>
          </div>
          <hr className="bg-danger" />
          <br />
          <div
            style={{
              backgroundImage: 'url(/sbcryptoanalysis.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              padding: '5rem 0',
            }}
          >
            <div className="container">
              <h2 className="display-4">
                What makes{' '}
                <i
                  style={{
                    color: 'crimson',
                    fontWeight: 'bold',
                  }}
                >
                  Super Base
                </i>{' '}
                special:
              </h2>
              <hr className="bg-danger" />
              <br />
              <div
                className="rounded p-3 h5"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  lineHeight: 2,
                }}
              >
                <ul>
                  <li>
                    Rebase is triggered hourly as long as price is above dynamic
                    peg.
                  </li>
                  <br />
                  <li>Hourly constant 5% rebase when price is above peg</li>
                  <br />
                  <li>
                    Peg price increases by 50% after two back to back rebase.
                  </li>
                  <br />
                  <li>
                    Peg goes back to last rebase peg after two hours of rebase.
                  </li>
                  <br />
                  <li>
                    Holders gets more tokens for holding just 5% distribution
                    among holders and compounding rebase.
                  </li>
                  <br />
                  <li>No negative rebase.</li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-wrap bg-white">
            <Card
              style={{
                maxWidth: 'fit-content',
                margin: '3.5rem auto',
                color: 'black',
              }}
            >
              <Card.Header>
                <h2>
                  <MdReport size="35" /> Tokenomics
                </h2>
              </Card.Header>
              <Card.Body>
                <div
                  className="container"
                  style={{
                    fontSize: '1.1rem',
                  }}
                >
                  <p className="bg-info badge-pill p-1 text-center">
                    Total Supply <Badge variant="success">6,700,000</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Private Sale <Badge variant="success">468,750</Badge>{' '}
                    (31,250) <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Pre Sale <Badge variant="success">2,638,910</Badge> (27,778)
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Liquidity <Badge variant="success">2,750,000</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Marketing <Badge variant="success">486,000</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Team <Badge variant="success">356,340</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                </div>
              </Card.Body>
            </Card>
            <div
              style={{
                width: 300,
                margin: '6rem 2rem 5rem 0',
              }}
            >
              <Image
                src="/sbchart.png"
                width="400"
                height="320"
                sizes="100"
                alt="chart"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary-50 p-2">
        <div className="d-flex justify-content-around">
          <div>SuperBase&copy;2021</div>
          <div className="bg-white rounded px-1">
            <a href="https://medium.com/@superrbase">
              <FaMedium size="30" />
            </a>
          </div>
          <div className="bg-white rounded px-1">
            <a href="https://t.me/superbasemain">
              <FaTelegram size="30" />
            </a>
          </div>
          <div className="bg-white rounded px-1">
            <a href="https://twitter.com/SuperrBase">
              <FaTwitter size="30" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
