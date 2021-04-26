import Head from 'next/head';
import Image from 'next/image';
import { Card, Badge } from 'react-bootstrap';
import { GiToken } from 'react-icons/gi';
import { MdReport } from 'react-icons/md';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Superbase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-primary text-white p-2">
        <h1>
          <Image src="/favicon-32x32.png" width="32" height="32" /> Super Base
        </h1>
      </header>

      <main
        style={{
          backgroundColor: '#113',
        }}
      >
        <div className="container py-5 text-white">
          <h2>Introducing Super Base</h2>
          <p>
            <b>Super Base</b> combines the Rebasing concept, Auto Liquidity
            Generation and the Big brained RFI tech by taking a 10% fee on every
            UNISWAP sale. That fee is broken up into 2 parts:
          </p>
          <ol>
            <li>
              <b>Reflection</b> — 5% of the fee is distributed to every wallet
              that holds $SBASE on a percentage basis. The more $SBASE you hold
              the more tokens you will receive.
            </li>
            <li>
              <b>LP Generation</b> — 5% of the fee- 2.5% of the fee collected in
              $SBASE is sold into ETH; that BNB is married up with the remaining
              2.5% of $SBASE and deposited back into the UNISWAP liquidity pool.
            </li>
          </ol>
          <div className="my-4">
            <h3 className="text-center my-5">UNISWAP 10% Fee Breakdown</h3>
            <div
              style={{
                width: 330,
                margin: '0 auto',
              }}
            >
              <Image src="/breakdown@2x.png" width="330" height="330" />
            </div>
          </div>
          <br />
          <h2>What makes Super Base special:</h2>
          <ul>
            <li>Rebase is triggered hourly as long as price is above peg.</li>
            <li>A constant rebase of 5%.</li>
            <li>
              Peg price increases by 50% after two immediate successful rebase.
            </li>
            <li>Peg goes back to last rebase peg after two hours of rebase.</li>
            <li>
              Holders gets more tokens for just holding 5% distribution among
              holders and compounding rebase.
            </li>
            <li>No negative rebase.</li>
          </ul>
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
              <div className="d-flex">
                <div className="justify-content-center">
                  <p className="bg-info badge-pill p-1 text-center">
                    Total Supply <Badge variant="success">6.2m</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Private Sale <Badge variant="success">657k</Badge> (33k){' '}
                    <GiToken size="25" color="gold" />
                  </p>
                </div>
                <div className="justify-content-center">
                  <p className="bg-info badge-pill p-1 text-center">
                    Pre Sale <Badge variant="success">2.6m</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Liquidity <Badge variant="success">2.3m</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                </div>
                <div className="justify-content-center">
                  <p className="bg-info badge-pill p-1 text-center">
                    Marketing <Badge variant="success">360k</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Team <Badge variant="success">327k</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <div
            style={{
              width: 330,
              margin: '0 auto',
            }}
          >
            <Image src="/super-base-chart.png" width="330" height="330" />
          </div>
        </div>
      </main>

      <footer className="bg-secondary-50">Superbase&copy;2021</footer>
    </>
  );
}
