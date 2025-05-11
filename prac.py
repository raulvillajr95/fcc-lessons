def singlePaymentCalc(a, b, d):
    d = d *12
    c = (((b * a* pow(1 + a, d)) / (pow(1 + a, d) -1)))
    d=d/12
    d = d-1
    if d == 0:
        return c
    else:
        b = b + c
        print (d)
        return c + singlePaymentCalc(a, b, d)

def main():
    principal = float(input("Initial amount: "))
    print (principal)
    apr = float(input("Rate: "))
    print (apr)
    compoundFrequency = int(input("Compouding Frequency: "))
    print (compoundFrequency)
    monthlyAPR = apr/(100*12)
    
    print(f"In {compoundFrequency} months, with {apr}% compounding interest on ${principal}, you pay ${round(singlePaymentCalc(monthlyAPR, principal, compoundFrequency), 2)} in interest.")


if __name__ == "__main__":
    main()