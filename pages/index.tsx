import Head from 'next/head';
import Image from 'next/image';
import { Card, Badge } from 'react-bootstrap';
import { GiToken } from 'react-icons/gi';
import { MdReport } from 'react-icons/md';
import { FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Superbase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-primary text-white p-1 fixed-top">
        <h1 className="font-italic">
          <Image
            src="/favicon-32x32.png"
            width="32"
            height="32"
            alt="super base"
          />{' '}
          Super Base
        </h1>
        <div className="d-flex justify-content-around">
          <div className="bg-white rounded px-1">
            <a href="https://medium.com/@superrbase">
              <FaMedium size="25" />
            </a>
          </div>
          <div className="bg-white rounded px-1">
            <a href="https://t.me/superbasemain">
              <FaTelegram size="25" />
            </a>
          </div>
          <div className="bg-white rounded px-1">
            <a href="https://twitter.com/SuperrBase">
              <FaTwitter size="25" />
            </a>
          </div>
        </div>
      </header>

      <main
        style={{
          backgroundColor: '#113',
          backgroundImage: "url('/sbcryptograph.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '2rem',
        }}
      >
        <div className="container py-5 text-white">
          <Image
            src="/sbcrypto.jpg"
            width="300"
            height="100"
            sizes="100"
            alt="coins in hand"
          />
          <h2 className="mt-5">Introducing Super Base</h2>
          <p
            className="m-5 rounded p-3"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            }}
          >
            <b>Super Base</b> combines the Rebasing concept, Auto Liquidity
            Generation and the Big brained RFI tech by taking a 10% fee on every
            uniswap sell. That fee is broken up into 2 parts:
          </p>
          <Image
            src="/sbcryptoanalysis.jpg"
            width="300"
            height="100"
            sizes="100"
            alt="chart"
          />
          <ol
            className="mt-5 rounded p-5"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            }}
          >
            <li>
              <b>Reflection</b> — 5% of the fee is distributed to every wallet
              that holds $SBASE on a percentage basis. The more $SBASE you hold
              the more tokens you will receive.
            </li>
            <br />
            <li>
              <b>LP Generation</b> — 5% of the fee- 2.5% of the fee collected in
              $SBASE is sold into ETH; that ETH is married up with the remaining
              2.5% of $SBASE and deposited back into the uniswap liquidity pool.
            </li>
          </ol>
          <div className="my-4">
            <h3 className="text-center my-5">uniswap 10% Fee Breakdown</h3>
            <div
              style={{
                width: 300,
                margin: '0 auto',
              }}
            >
              <Image
                src="/breakdown@2x.png"
                width="320"
                height="320"
                alt="chart"
              />
            </div>
          </div>
          <br />
          <h2>What makes Super Base special:</h2>
          <div
            className="rounded p-3"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            }}
          >
            <ul>
              <li>
                Rebase is triggered hourly as long as price is above dynamic
                peg.
              </li>
              <li>Hourly constant 5% rebase when price is above peg</li>
              <li>Peg price increases by 50% after two back to back rebase.</li>
              <li>
                Peg goes back to last rebase peg after two hours of rebase.
              </li>
              <li>
                Holders gets more tokens for holding just 5% distribution among
                holders and compounding rebase.
              </li>
              <li>No negative rebase.</li>
            </ul>
          </div>
          <hr />
          <div className="d-flex flex-wrap">
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
                margin: '7rem auto 0',
              }}
            >
              <Image src="/sbchart.png" width="300" height="320" alt="chart" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary-50">
        <div className="d-flex justify-content-around">
          <div>Superbase&copy;2021</div>
          <div className="bg-white rounded px-1">
            <a href="https://medium.com/@superrbase">
              <FaMedium size="25" />
            </a>
          </div>
          <div className="bg-white rounded px-1">
            <a href="https://t.me/superbasemain">
              <FaTelegram size="25" />
            </a>
          </div>
          <div className="bg-white rounded px-1">
            <a href="https://twitter.com/SuperrBase">
              <FaTwitter size="25" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
