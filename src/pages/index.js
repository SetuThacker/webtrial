import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Strong, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Formspree, SocialMedia } from "@quarkly/components";
import { MdArrowDownward, MdHelp, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Let's change the way to talk with customer & grow customer experience !!!
					</Text>
					<Text
						as="h1"
						font="--headline1"
						md-font="--headline2"
						margin="10px 0"
						color="#00f777"
					>
						Transformation from Manual Message to Custom Automated Message :)
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who i am
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background=",url(https://uploads.quarkly.io/5fd9c0126d47ab001e032c41/images/IMG_20191117_090316.jpg?v=2020-12-16T08:25:00.173Z) center/cover" sm-background="url(https://uploads.quarkly.io/5fd9c0126d47ab001e032c41/images/IMG_20191117_090316.jpg?v=2020-12-16T08:25:00.173Z) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text
					as="h2"
					font="--headline2"
					margin="0 0 12px 0"
					text-align="left"
					text-shadow="10px -10px 100px transparent"
					color="#00f777"
				>
					Hey I’m Setu ;)
				</Text>
				<Text font="--base" text-align="center" sm-text-align="left" sm-width="230px">
					My name is{" "}
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Setu R. Thacker
					</Strong>
					. l have one tool for you which will{" "}
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						enhance your customer experience
					</Strong>
					{" "}with this Tool called MySMS. I am Student of Engineering &{" "}
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						I have build this App for Business Owners, Educational Institutes, Academy
					</Strong>
					{" "}& many more people who can get benefit from this App called{" "}
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						MySMS.
					</Strong>
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px 0px 8px 0px"
			>
				Let's start the Journey
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						How to use this MySMS App ?
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" sm-height="480px">
						<br />
						<br />
						How this App Works ?
						<br />
						<br />
						To use this App User needs to handle 2 different tools, One of them is MySMS Mobile App.
						<br />
						<br />
						2nd tool will help us to design the message for the recipients.{" "}
						<br />
						<br />
						that 2nd tool will help user to maintain all the record & status of deliver of the messages.{" "}
						<br />
						<br />
						I will share the MySMS  Mobile app with User via Email, once User have complete all the remaining Processes.
						<br />
						<br />
						User needs to Sign In using Mobile Number & Password which User has submitted.
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section color="--dark">
			<Text as="h2" font="--headline2" md-font="--headline2" margin="20px 0 0 0">
				Frequently Asked Questions (FaQ)
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
				sm-top="10px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
					padding="10px 0px 0px 0px"
					sm-bottom="auto"
					sm-height="36px"
					sm-left="0px"
					sm-right="auto"
					sm-top="54px"
					sm-width="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0" sm-padding="0px 0px 0px 45px">
					What does this Tool actually do?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Actually, It is an Mobile Application like others one. Which can help the user to send unlimited number of SMS from the Particular Phone No. If SMS pack from that mobile number is ON. Otherwise it will charge as per plan of the SIM Card. To use this Tool, User will be provided a Google Sheet where User can able to change the text of the message with &#123;&#123;Name of Recipient&#125;&#125; like Email & many more such type of customizations will be provided, list of recipients.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
					padding="10px 0px 0px 0px"
					sm-bottom="auto"
					sm-height="36px"
					sm-left="0px"
					sm-right="auto"
					sm-top="50px"
					sm-width="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0" sm-padding="0px 0px 0px 45px">
					Will I get it for Lifetime?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Once Customer purchased the App from me then it's totally yours for use it for life.
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
					padding="10px 0px 0px 0px"
					sm-bottom="auto"
					sm-height="36px"
					sm-left="0px"
					sm-right="auto"
					sm-top="53px"
					sm-width="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0" sm-padding="0px 0px 0px 45px">
					What about Hidden Cost to Use this Properly?{" "}
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					if someone wants to send 3000 SMS in a day, then User have to have activate the SMS plan on particular Business Number. But, if User wants to send 100 SMS in a Day, then there is no hidden charges. Because, Now-a-Day all ISP (Vi, Jio, Airtel, BSNL & others) offers 100 SMS per day which is more than a sufficient for a Normal use. So, In this case no Hidden Cost for a User. Other than this User have to invest some amount in SMS Plans.
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
					padding="10px 0px 0px 0px"
					sm-bottom="auto"
					sm-height="36px"
					sm-left="0px"
					sm-right="auto"
					sm-top="54px"
					sm-width="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0" sm-padding="0px 0px 0px 45px">
					Why to choose this Tool instead of other tools available in Market ?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					To use MySMS you have to do onetime Investment for Lifetime if you are in category of Normal User who wants to send less than 100 SMS a Day. In case of the High Number of SMS then it's work like a charm. If User want go with any Bulk SMS Service for 1 Lakh SMS plan it will cost more than 8,000 INR. But, If User use MySMS then it would be around 1600 INR which is 1/5th Cost of the market. I hope you got it :)
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Text as="h3" font="--headline3" margin="10px 0" sm-padding="0px 0px 0px 45px">
					Will SMS go inside the Promotion Section ?{"\n\n"}
				</Text>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
					padding="10px 0px 0px 0px"
					sm-bottom="auto"
					sm-height="36px"
					sm-left="0px"
					sm-right="auto"
					sm-top="54px"
					sm-width="36px"
				/>
				<Text
					as="h3"
					font="--headline3"
					margin="10px 0"
					width="900px"
					sm-padding="0px 0px 0px 45px"
				/>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					No. Once the User has sent the SMS to all the Recipients. It will send in Main Inbox like his friend has send the message. MySMS is just Automate the thing like Name of the Recipients, Salary Amount, Different Coupon Code per Recipients & Many More Like this...
					<br />
					<br />
					So, There are No chances that It will send inside the Promotion / Bulk Message Category, Chill :)
				</Text>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Let's Meet at
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							Gandhidham, Kutchh
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
							sm-bottom="auto"
							sm-height="48px"
							sm-left="0px"
							sm-right="auto"
							sm-top="0px"
							sm-width="48px"
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Get Support here & Ask your Query
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								Setuthacker007@gmail.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
							sm-bottom="14px"
							sm-height="48px"
							sm-left="0px"
							sm-right="auto"
							sm-top="auto"
							sm-width="48px"
						/>
						<Text as="h4" margin="6px 0" font="--base">
							My Contact Number
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+91 94278 15082
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Formspree>
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-dark" padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});