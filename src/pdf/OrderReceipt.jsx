import React from "react";
import PropTypes from "prop-types";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: "#132322",
  },
  header: {
    backgroundColor: "#132322",
    marginHorizontal: -40,
    marginTop: -40,
    padding: 24,
    marginBottom: 24,
  },
  brand: {
    color: "#3ddc91",
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 13,
    marginTop: 4,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#6b7573",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#132322",
    paddingBottom: 6,
    marginBottom: 6,
  },
  tableHeaderText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    textTransform: "uppercase",
    color: "#6b7573",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
  },
  itemName: {
    flex: 1,
    fontFamily: "Helvetica-Bold",
  },
  itemPrice: {
    width: 70,
    textAlign: "right",
  },
  totals: {
    marginTop: 12,
    alignSelf: "flex-end",
    width: 200,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  grandTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#132322",
  },
  grandTotalText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
  },
  footer: {
    marginTop: 32,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ededed",
    textAlign: "center",
    color: "#6b7573",
    fontSize: 10,
  },
});

const formatOrderDate = (isoDate) =>
  new Date(isoDate).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

const OrderReceipt = ({ order }) => {
  const { items, personalInfo, orderTotal, orderTax, orderGrandTotal, orderDate } = order;
  const { firstName, lastName, postalCode } = personalInfo || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brand}>Swag Labs</Text>
          <Text style={styles.headerTitle}>Order Receipt</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Details</Text>
          <View style={styles.row}>
            <Text>Order Date</Text>
            <Text>{formatOrderDate(orderDate)}</Text>
          </View>
        </View>

        {(firstName || lastName || postalCode) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ship To</Text>
            <Text>
              {[firstName, lastName].filter(Boolean).join(" ") || "-"}
            </Text>
            {postalCode && <Text>{postalCode}</Text>}
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Items</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.itemName]}>
              Description
            </Text>
            <Text style={[styles.tableHeaderText, styles.itemPrice]}>
              Price
            </Text>
          </View>
          {items.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
          ))}

          <View style={styles.totals}>
            <View style={styles.totalRow}>
              <Text>Item total</Text>
              <Text>${orderTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text>Tax</Text>
              <Text>${orderTax}</Text>
            </View>
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalText}>Total</Text>
              <Text style={styles.grandTotalText}>${orderGrandTotal}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          Thank you for your order! It has been dispatched, and will arrive
          just as fast as the pony can get there.
        </Text>
      </Page>
    </Document>
  );
};

OrderReceipt.propTypes = {
  order: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ).isRequired,
    personalInfo: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      postalCode: PropTypes.string,
    }),
    orderTotal: PropTypes.number.isRequired,
    orderTax: PropTypes.string.isRequired,
    orderGrandTotal: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderReceipt;
