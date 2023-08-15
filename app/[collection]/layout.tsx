import styles from '../styles.module.scss'

export default function RootLayout({
	children,
  }: {
	children: React.ReactNode
  }) {
	return (
	  <div>
		{children}
	  </div>
	)
  }