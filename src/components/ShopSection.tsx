'use client';

import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'MYSÉLF UNISEX TEE',
    price: 'Ansehen',
    image: '/myself_unisex_tee.jpg',
    link: 'https://myself88.myspreadshop.de/myself+official+gold+logo-A696ed00e7bf7aa50ae476c8b?productType=812&sellable=5w8XjAN4exsGzmaAZ1AX-812-7&appearance=2',
    tag: null,
  },
  {
    id: 2,
    name: 'MYSÉLF WOMEN TEE',
    price: 'Ansehen',
    image: '/myself_women_tee.jpg',
    link: 'https://myself88.myspreadshop.de/myself+official+gold+logo-A696ed00e7bf7aa50ae476c8b?productType=813&sellable=5w8XjAN4exsGzmaAZ1AX-813-8&appearance=2',
    tag: null,
  },
  {
    id: 3,
    name: 'MYSÉLF UNISEX HOODIE',
    price: 'Ansehen',
    image: '/myself_unisex_hoodie.jpg',
    link: 'https://myself88.myspreadshop.de/myself+official+gold+logo-A696ed00e7bf7aa50ae476c8b?productType=20&sellable=5w8XjAN4exsGzmaAZ1AX-20-22&appearance=2',
    tag: null,
  },
  {
    id: 4,
    name: 'MYSÉLF OFFICIAL HAT',
    price: 'Ansehen',
    image: '/myself_official_hat.jpg',
    link: 'https://myself88.myspreadshop.de/myself+official+gold+logo-A696ed00e7bf7aa50ae476c8b?productType=905&sellable=5w8XjAN4exsGzmaAZ1AX-905-34&appearance=14&size=29',
    tag: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function ShopSection() {
  return (
    <section
      id="shop"
      style={{
        padding: '120px 0',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '60px',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '12px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Offizieller Merch
            </p>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1,
                color: 'var(--text)',
              }}
            >
              SH<span style={{ color: 'var(--accent)' }}>O</span>P
            </h2>
          </div>
          <a
            href="https://myself88.myspreadshop.de/mys%C3%A9lf+official+gold+logo?idea=696ed00e7bf7aa50ae476c8b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden md:inline-flex"
            style={{ marginBottom: '8px' }}
          >
            Alle Produkte
          </a>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <motion.a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                cursor: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              }}
            >
              {/* Product Image */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '1',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    filter: 'grayscale(30%)',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1.08)';
                    (e.target as HTMLImageElement).style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1)';
                    (e.target as HTMLImageElement).style.filter = 'grayscale(30%)';
                  }}
                />

                {/* Tag */}
                {product.tag && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 12px',
                      background: 'var(--accent)',
                      color: 'var(--bg)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {product.tag}
                  </span>
                )}

                {/* Hover overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10, 10, 10, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0';
                  }}
                >
                  <span
                    style={{
                      padding: '10px 28px',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Ansehen
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div style={{ padding: '16px 20px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--accent)',
                    fontWeight: 500,
                  }}
                >
                  {product.price}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="md:hidden" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://myself88.myspreadshop.de/mys%C3%A9lf+official+gold+logo?idea=696ed00e7bf7aa50ae476c8b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Alle Produkte
          </a>
        </div>
      </div>
    </section>
  );
}
