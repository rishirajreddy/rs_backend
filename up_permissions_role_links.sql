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
-- Data for Name: up_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_permissions_role_links (permission_id, role_id, id, permission_order) FROM stdin;
980	9	961	25
984	6	965	30
988	6	969	33
992	6	973	34
993	7	974	71
998	7	978	71
999	7	980	72
1003	7	984	76
1007	7	988	79
1012	9	993	28
985	6	966	31
989	7	970	69
995	7	975	71
997	7	979	71
1000	7	981	73
1004	9	985	26
1009	7	990	79
1013	9	994	29
987	6	967	31
991	7	971	69
994	7	976	71
1001	7	982	74
1005	7	986	77
1010	7	991	79
1014	6	995	35
614	6	595	\N
615	6	596	\N
616	9	597	\N
617	9	598	\N
618	9	599	\N
619	9	600	\N
620	9	601	\N
621	9	602	\N
622	9	603	\N
623	6	604	\N
624	9	605	\N
625	6	606	\N
626	7	607	1
685	7	608	1
628	7	609	1
629	7	610	1
630	7	611	1
631	7	612	2
696	7	613	2
633	7	614	3
634	7	615	3
699	7	616	3
635	7	617	3
700	7	618	3
703	7	619	4
638	7	620	4
639	7	621	4
640	7	622	4
717	7	623	7
642	7	624	8
719	7	625	8
747	7	626	9
646	7	627	9
748	7	628	9
647	7	629	9
648	7	630	9
725	7	631	10
651	7	632	10
751	7	633	10
726	7	634	10
727	7	635	10
756	7	636	11
654	7	637	11
655	7	638	11
658	7	639	11
736	7	640	11
659	7	641	12
758	7	642	12
660	7	643	12
661	7	644	12
761	7	645	12
666	7	646	13
664	7	647	13
762	7	648	13
763	7	649	13
766	7	650	13
669	7	651	14
769	7	652	14
767	7	653	14
670	7	654	14
673	7	655	15
674	7	656	17
675	7	657	19
676	6	658	3
677	7	659	20
678	9	660	1
679	9	661	3
680	7	662	22
681	7	663	24
682	9	664	5
689	6	665	\N
690	9	666	\N
691	6	667	\N
692	9	668	\N
693	9	669	\N
694	9	670	\N
695	6	671	\N
683	9	672	6
705	9	673	\N
706	9	674	\N
707	6	675	\N
708	6	676	\N
709	6	677	\N
710	6	678	\N
711	6	679	\N
712	9	680	\N
714	6	681	\N
715	6	682	\N
720	6	683	\N
721	6	684	\N
728	6	685	\N
729	6	686	\N
730	6	687	\N
731	6	688	\N
732	6	689	\N
733	6	690	\N
734	6	691	\N
735	9	692	\N
737	6	693	\N
738	9	694	\N
739	6	695	\N
740	6	696	\N
741	6	697	\N
742	6	698	\N
744	6	699	\N
743	6	700	\N
684	7	701	1
745	6	702	\N
627	7	703	1
686	7	704	1
687	7	705	1
688	7	706	1
632	7	707	2
697	7	708	2
698	7	709	3
636	7	710	3
701	7	711	3
637	7	712	3
702	7	713	4
704	7	714	4
713	7	715	5
641	7	716	6
716	7	717	6
643	7	718	8
718	7	719	8
644	7	720	8
645	7	721	8
746	7	722	8
649	7	723	9
722	7	724	9
724	7	725	9
723	7	726	9
749	7	727	9
650	7	728	10
750	7	729	10
653	7	730	10
652	7	731	10
752	7	732	10
753	7	733	11
754	7	734	11
755	7	735	11
657	7	736	11
656	7	737	11
757	7	738	12
759	7	739	12
760	7	740	12
662	7	741	12
663	7	742	12
765	7	743	13
764	7	744	13
665	7	745	13
667	7	746	13
668	7	747	13
768	7	748	14
770	7	749	14
671	7	750	14
672	7	751	14
771	7	752	16
772	7	753	18
773	6	754	1
774	6	755	2
775	9	756	2
776	9	757	4
777	7	758	22
778	7	759	23
779	7	760	25
780	9	761	7
781	9	762	7
782	9	763	8
783	6	764	4
784	7	765	26
785	6	766	5
786	6	767	6
787	6	768	6
788	9	769	9
789	9	770	9
790	9	771	10
791	9	772	10
792	7	773	27
794	7	774	27
793	7	775	27
795	7	776	27
796	7	777	27
797	7	778	27
798	7	779	27
799	7	780	27
801	7	781	28
803	7	782	28
804	7	783	28
800	7	784	28
802	7	785	28
806	7	786	29
807	7	787	29
808	7	788	29
805	7	789	30
810	7	790	30
809	7	791	30
811	7	792	31
813	7	793	31
816	7	794	31
815	7	795	31
814	7	796	31
812	7	797	31
817	7	798	32
818	7	799	32
819	7	800	33
820	7	801	33
821	7	802	33
822	7	803	33
823	7	804	33
824	7	805	33
825	7	806	33
826	7	807	33
828	7	808	34
827	7	809	34
829	7	810	34
830	7	811	34
832	7	812	35
831	7	813	35
833	7	814	35
835	7	815	35
834	7	816	35
836	7	817	35
837	7	818	35
838	6	819	7
839	6	820	7
841	6	821	7
840	6	822	8
842	6	823	8
843	9	824	11
845	9	825	11
844	9	826	12
846	9	827	12
847	6	828	9
848	7	829	36
849	7	830	37
855	6	836	10
857	6	837	10
856	6	838	10
858	6	839	10
859	6	840	11
861	7	842	39
862	7	843	40
864	7	844	40
863	7	845	40
865	7	846	40
866	7	847	41
867	7	848	42
869	7	849	42
868	7	850	42
870	7	851	42
871	7	852	42
872	7	853	42
873	7	854	43
874	7	855	43
876	7	856	43
875	7	857	43
877	9	858	13
878	9	859	14
879	9	860	15
880	7	861	44
882	7	862	44
881	7	863	45
885	7	864	46
883	7	865	46
886	7	866	46
884	7	867	46
887	7	868	47
888	7	869	48
889	6	870	12
890	9	871	16
891	9	872	16
892	9	873	16
893	9	874	16
894	9	875	16
895	7	876	49
896	7	877	49
897	7	878	49
898	9	879	17
899	9	880	18
900	9	881	18
901	7	882	50
902	7	883	50
903	6	884	13
904	6	885	13
906	7	886	51
907	7	887	51
905	7	888	51
908	9	889	19
910	9	890	20
909	9	891	20
911	9	892	21
912	6	893	15
913	6	894	16
914	6	895	17
915	6	896	19
916	9	897	23
917	9	898	24
918	6	899	23
919	6	900	23
920	7	901	52
921	7	902	52
922	7	903	53
923	7	904	53
924	7	905	53
925	7	906	53
926	7	907	54
927	7	908	55
928	7	909	55
929	7	910	56
930	7	911	56
931	7	912	56
932	7	913	57
933	7	914	57
934	7	915	58
935	7	916	59
936	7	917	59
937	7	918	59
938	7	919	59
940	7	920	59
941	7	921	59
942	7	922	59
939	7	923	59
944	7	924	59
945	7	925	59
947	7	926	60
949	7	927	60
943	7	928	60
951	7	929	60
946	7	930	60
948	7	931	60
950	7	932	60
952	7	933	60
953	7	934	60
954	6	935	24
956	6	936	24
955	6	937	24
957	6	938	24
958	6	939	24
959	6	940	25
960	7	941	61
961	6	942	26
962	6	943	26
963	7	944	62
964	6	945	27
965	6	946	28
966	7	947	63
967	7	948	63
968	7	949	64
969	6	950	29
970	7	951	65
971	7	952	65
973	7	953	65
972	7	954	66
974	7	955	66
975	7	956	67
976	7	957	67
977	7	958	67
978	7	959	67
979	7	960	68
983	6	964	30
986	6	968	32
990	7	972	70
996	7	977	71
1002	7	983	75
1006	7	987	78
1008	7	989	79
1011	9	992	27
1024	9	1005	30
1025	9	1006	31
1026	9	1007	32
1027	9	1008	33
1029	6	1009	36
1028	6	1010	36
1030	7	1011	80
1031	7	1012	81
1032	6	1013	37
1033	7	1014	82
1034	7	1015	82
1035	7	1016	83
1036	7	1017	83
1037	7	1018	83
1038	7	1019	83
1039	7	1020	83
1040	6	1021	38
1041	6	1022	38
1042	9	1023	34
1043	9	1024	34
1044	6	1025	39
1045	6	1026	40
1046	6	1027	41
1047	9	1028	35
1048	6	1029	42
1049	7	1030	84
1050	7	1031	84
1051	9	1032	36
1052	6	1033	43
1054	6	1034	44
1053	6	1035	44
1055	6	1036	45
1056	7	1037	85
1057	7	1038	85
1058	7	1039	85
1060	7	1040	85
1061	7	1041	86
1059	7	1042	86
1062	6	1043	46
1063	9	1044	37
\.


--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_permissions_role_links_id_seq', 1044, true);


--
-- PostgreSQL database dump complete
--
