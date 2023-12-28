--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: up_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_roles (id, name, description, type, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
8	Staff	For Staff: Users - Products - Orders - Subscriptions	support	2023-03-22 13:00:41.857	2023-05-25 10:50:11.626	\N	\N
7	Admin	Full Control	admin	2023-03-22 12:59:42.717	2023-12-14 11:00:28.381	\N	\N
6	Consumer	Default role given to authenticated user.	authenticated	2022-09-23 07:32:31.729	2023-12-20 11:53:07.184	\N	\N
9	Public	Default role given to unauthenticated user.	public	2022-09-23 07:32:31.741	2023-12-26 11:00:32.589	\N	\N
\.


--
-- Name: up_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_roles_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

