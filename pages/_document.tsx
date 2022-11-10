import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx);

		return initalProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'true'} />
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,900;1,700&family=Roboto:wght@400;700;900&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
					/>
				</Head>
				<body className='scroll-smooth animate__animated animate__fadeIn'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
